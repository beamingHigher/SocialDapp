import WalletSelector from '@components/Shared/Navbar/Login/WalletSelector'
import { Dispatch, FC, useState } from 'react'
import { APP_NAME, IS_MAINNET } from 'src/constants'

import Create from './Create'

interface Props {
  setShowLoginModal: Dispatch<boolean>
}

const Login: FC<Props> = ({ setShowLoginModal }) => {
  const [hasConnected, setHasConnected] = useState<boolean>(false)
  const [hasProfile, setHasProfile] = useState<boolean>(true)

  return (
    <div className="p-5">
      {hasProfile ? (
        <div className="space-y-5">
          {hasConnected ? (
            <div className="space-y-1">
              <div className="text-xl font-bold">Please sign the message.</div>
              <div className="text-sm text-gray-500">
                {APP_NAME} uses this signature to verify that you&rsquo;re the
                owner of this address.
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-xl font-bold">Connect your wallet.</div>
              <div className="text-sm text-gray-500">
                Connect with one of our available wallet providers or create a
                new one.
              </div>
            </div>
          )}
          <WalletSelector
            setHasConnected={setHasConnected}
            setHasProfile={setHasProfile}
            setShowLoginModal={setShowLoginModal}
          />
        </div>
      ) : IS_MAINNET ? (
        <div>
          <div className="mb-2 space-y-4">
            <div className="text-xl font-bold">Claim your profile</div>
            <div className="space-y-1">
              <div className="linkify">
                Visit{' '}
                <a
                  className="font-bold"
                  href="http://claim.lens.xyz"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  claiming site
                </a>{' '}
                to claim your profile now 🏃‍♂️
              </div>
              <div className="text-sm text-gray-500">
                Make sure to check back here when done!
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Create isModal />
      )}
    </div>
  )
}

export default Login
