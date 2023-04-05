import { gql, useMutation } from '@apollo/client'
import { Tooltip } from '@components/UI/Tooltip'
import { LensterPost } from '@generated/lenstertypes'
import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'
import {
  ThumbDownIcon as ThumbDownIconSolid,
  ThumbUpIcon as ThumbUpIconSolid
} from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CONNECT_WALLET } from 'src/constants'
import { useAppPersistStore } from 'src/store/app'

const ADD_REACTION_MUTATION = gql`
  mutation AddReaction($request: ReactionRequest!) {
    addReaction(request: $request)
  }
`

const REMOVE_REACTION_MUTATION = gql`
  mutation RemoveReaction($request: ReactionRequest!) {
    removeReaction(request: $request)
  }
`

interface Props {
  post: LensterPost
}

const Vote: FC<Props> = ({ post }) => {
  const { isAuthenticated, currentUser } = useAppPersistStore()
  const [liked, setLiked] = useState<boolean>(false)
  const [disLiked, setDisliked] = useState<boolean>(false)
  const [upCount, setUpCount] = useState<number>(0)
  const [downCount, setDownCount] = useState<number>(0)

  useEffect(() => {
    if (post?.mirrorOf?.stats?.totalUpvotes || post?.stats?.totalUpvotes) {
      const count =
        post.__typename === 'Mirror'
          ? post?.mirrorOf?.stats?.totalUpvotes
          : post?.stats?.totalUpvotes
      const reaction =
        post.__typename === 'Mirror' ? post?.mirrorOf?.reaction : post?.reaction

      setUpCount(count)
      setLiked(reaction === 'UPVOTE')
    }
    if (post?.mirrorOf?.stats?.totalDownvotes || post?.stats?.totalDownvotes) {
      const count =
        post.__typename === 'Mirror'
          ? post?.mirrorOf?.stats?.totalDownvotes
          : post?.stats?.totalDownvotes
      const reaction =
        post.__typename === 'Mirror' ? post?.mirrorOf?.reaction : post?.reaction

      setDownCount(count)
      setDisliked(reaction === 'DOWNVOTE')
    }
  }, [post])

  const [addReaction] = useMutation(ADD_REACTION_MUTATION, {
    onError(error) {
      // setLiked(!liked)
      // setCount(count - 1)
      toast.error(error.message)
    }
  })

  const [removeReaction] = useMutation(REMOVE_REACTION_MUTATION, {
    onError(error) {
      // setLiked(!liked)
      // setCount(count + 1)
      toast.error(error.message)
    }
  })

  const createReaction = (like: Boolean) => {
    if (!isAuthenticated) return toast.error(CONNECT_WALLET)

    const upVariable = {
      variables: {
        request: {
          profileId: currentUser?.id,
          reaction: 'UPVOTE',
          publicationId:
            post.__typename === 'Mirror'
              ? post?.mirrorOf?.id
              : post?.pubId ?? post?.id
        }
      }
    }

    const downVariable = {
      variables: {
        request: {
          profileId: currentUser?.id,
          reaction: 'DOWNVOTE',
          publicationId:
            post.__typename === 'Mirror'
              ? post?.mirrorOf?.id
              : post?.pubId ?? post?.id
        }
      }
    }

    if (like) {
      if (liked) {
        setLiked(false)
        setUpCount(upCount - 1)
        removeReaction(upVariable)
      } else if (disLiked) {
        setDisliked(false)
        setLiked(true)
        setUpCount(upCount + 1)
        setDownCount(downCount - 1)
        addReaction(upVariable)
      } else {
        setLiked(true)
        setUpCount(upCount + 1)
        addReaction(upVariable)
      }
    } else {
      if (disLiked) {
        setDisliked(false)
        setDownCount(downCount - 1)
        removeReaction(downVariable)
      } else if (liked) {
        setDisliked(true)
        setLiked(false)
        setUpCount(upCount - 1)
        setDownCount(downCount + 1)
        addReaction(downVariable)
      } else {
        setDisliked(true)
        setDownCount(downCount + 1)
        addReaction(downVariable)
      }
    }
  }

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => createReaction(true)}
        aria-label="Like"
        data-test="publication-like"
      >
        <div className="flex items-center space-x-1 text-brand">
          <div className="flex p-1.5 rounded-full hover:bg-brand-300 hover:bg-opacity-20">
            <Tooltip placement="top" content="Like" withDelay>
              {liked ? (
                <ThumbUpIconSolid className="w-[20px]" />
              ) : (
                <ThumbUpIcon className="w-[20px]" />
              )}
            </Tooltip>
          </div>
        </div>
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => createReaction(false)}
        aria-label="Dislike"
        data-test="publication-like"
      >
        <div className="flex items-center space-x-1 text-brand">
          <div className="flex p-1.5 rounded-full hover:bg-brand-300 hover:bg-opacity-20">
            <Tooltip placement="top" content="Dislike" withDelay>
              {disLiked ? (
                <ThumbDownIconSolid className="w-[20px]" />
              ) : (
                <ThumbDownIcon className="w-[20px]" />
              )}
            </Tooltip>
          </div>
          {
            <div className="text-xs">
              {upCount - downCount > 0
                ? '+' + (upCount - downCount)
                : upCount - downCount}
            </div>
          }
        </div>
      </motion.button>
    </>
  )
}

export default Vote
