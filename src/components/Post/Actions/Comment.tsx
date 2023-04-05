import { Tooltip } from '@components/UI/Tooltip'
import { LensterPost } from '@generated/lenstertypes'
import { ChatIcon } from '@heroicons/react/outline'
import humanize from '@lib/humanize'
import nFormatter from '@lib/nFormatter'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  post: LensterPost
}

const Comment: FC<Props> = ({ post }) => {
  const count =
    post.__typename === 'Mirror'
      ? post?.mirrorOf?.stats?.totalAmountOfComments
      : post?.stats?.totalAmountOfComments
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      aria-label="Comment"
      data-test="publication-comment"
    >
      <Link href={`/posts/${post?.id ?? post?.pubId}`}>
        <a
          href={`/posts/${post?.id ?? post?.pubId}`}
          className="flex items-center space-x-1 text-brand hover:text-brand-400"
        >
          <div className="p-1.5 rounded-full hover:bg-brand-300 hover:bg-opacity-20">
            <Tooltip
              placement="top"
              content={count > 0 ? `${humanize(count)} Comments` : 'Comment'}
              withDelay
            >
              <ChatIcon className="w-[20px]" />
            </Tooltip>
          </div>
          {count > 0 && <div className="text-xs">{nFormatter(count)}</div>}
        </a>
      </Link>
    </motion.button>
  )
}

export default Comment
