import Head from 'next/head'
import React, { FC } from 'react'
import { APP_NAME, DEFAULT_OG, DESCRIPTION } from 'src/constants'

interface Props {
  title?: string
  description?: string
}

const SEO: FC<Props> = ({ title = APP_NAME, description = DESCRIPTION }) => {
  const titleText = `${title} | Decentralized Social Media`
  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />

      <link rel="preconnect" href="https://ik.imagekit.io" />
      <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      <link rel="preconnect" href="https://assets.lenster.xyz" />
      <link rel="dns-prefetch" href="https://assets.lenster.xyz" />
      <link rel="preconnect" href="https://infura-ipfs.io" />
      <link rel="dns-prefetch" href="https://infura-ipfs.io" />

      <link rel="apple-touch-icon" sizes="192x192" href="/logo.jpg" />
      <link rel="manifest" href="/manifest.json" />

      <meta property="og:url" content="https://www.liveloud.io" />
      <meta property="og:site_name" content="SocialDapp" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_OG} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="SocialDapp" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={DEFAULT_OG} />
      <meta property="twitter:image:width" content="400" />
      <meta property="twitter:image:height" content="400" />
      <meta property="twitter:creator" content="lens" />

      <link
        rel="search"
        type="application/opensearchdescription+xml"
        href="/opensearch.xml"
        title={APP_NAME}
      />
    </Head>
  )
}

export default SEO
