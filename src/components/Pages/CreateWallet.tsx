import Footer from '@components/Shared/Footer'
import SEO from '@components/utils/SEO'
import React, { FC } from 'react'
import YouTube from 'react-youtube'
import { APP_NAME } from 'src/constants'

const CreateWallet: FC = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }
  return (
    <>
      <SEO title={`Privacy • ${APP_NAME}`} />
      <div
        className="flex justify-center items-center w-full h-48 bg-brand-400"
        data-test="privacy-content"
      >
        <div className="relative text-center">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            What crypto wallets can I use with SocialDapp?
          </h1>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <div className="relative mx-auto rounded-lg sm:w-2/4 max-w-3/4">
            <div className="!p-8 prose dark:prose-dark max-w-none text-gray-600 dark:text-gray-200">
              <p>
                Just as there are many banks and credit cards, there are many
                different crypto wallet providers to choose from. They all serve
                the same purpose, but each one takes a different approach and
                makes different tradeoffs.
              </p>
              <br />
              <p>
                This guide introduces many of the crypto wallets that are
                supported on SocialDapp.
              </p>
              <div className="mt-8 mb-5 text-xl font-bold text-black dark:text-white">
                <YouTube videoId="7pmA02zY8Ag" opts={opts} />
              </div>
              <h1 className="mb-5 mt-5 text-3xl font-semibold text-black md:text-3xl">
                What crypto wallets can I use with SocialDapp?
              </h1>
              <p className="mb-5">
                If you're wondering which crypto wallet to use - the best way is
                to try out one of the many options available! They all have
                different features, but many users choose MetaMask for desktop
                use, and Coinbase Wallet for mobile use.
              </p>
              <p>
                Check out this
                <a
                  className="ml-1 mr-1 text-black font-bold"
                  href="https://www.youtube.com/watch?v=ZIGUC9JAAw8"
                >
                  MetaMask Introduction Video
                </a>
                to get a sense of the installation process. It only takes a few
                minutes to install.
              </p>
              <p className="mt-3">
                You can find the full list of wallets supported by SocialDapp
                below.{' '}
              </p>

              <p className="mb-5">
                Our primary purpose in collecting information is to to help us
                operate, provide, improve, customize, support, and market our
                Services.
              </p>
              <p>
                <span className="text-black font-bold">
                  <a
                    href="https://metamask.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MetaMask
                  </a>
                </span>
                – A browser extension and mobile app. MetaMask is web3’s most
                popular wallet and one of the oldest players in the industry.
              </p>
              <p className="mt-5">
                <span className="text-black font-bold">
                  <a
                    href="https://walletconnect.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WalletConnect
                  </a>
                </span>
                – WalletConnect is a protocol supported by many different dApps
                and wallets.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-2 pb-6">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default CreateWallet
