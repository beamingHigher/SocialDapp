import React, { FC } from 'react'
import { APP_NAME } from 'src/constants'

const Hero: FC = () => {
  return (
    <div className="py-12 mb-4 border-b bg-hero dark:border-b-gray-700/80">
      <div className="container px-5 mx-auto max-w-screen-xl">
        <div className="flex items-stretch py-8 w-full text-center sm:py-12 sm:text-left">
          <div className="flex-1 flex-shrink-0 space-y-3">
            <div
              className="text-2xl font-extrabold text-black sm:text-3xl"
              data-test="app-name"
            >
              {APP_NAME} 🔊 - Decentralized Social Media
            </div>
            <div
              className="leading-7 text-gray-700"
              data-test="app-description"
            >
              Say It All Unfiltered<br></br>
              Built with Lens Protocol 🌿
            </div>
          </div>
          <div className="hidden flex-1 flex-shrink-0 w-full sm:block" />
        </div>
      </div>
    </div>
  )
}

export default Hero
