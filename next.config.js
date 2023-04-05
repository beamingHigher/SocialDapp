const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { withSentryConfig } = require('@sentry/nextjs')
const withTM = require('next-transpile-modules')(['plyr-react'])

const moduleExports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/_app': { page: '/_app' },
      '/404': { page: '/404' },
      '/500': { page: '/500' },
      '/communities': { page: '/communities' },
      '/contact': { page: '/contact' },
      '/create/community': { page: '/create/community' },
      '/create/crowdfund': { page: '/create/crowdfund' },
      '/create/profile': { page: '/create/profile' },
      '/home': { page: '/home' },
      '/notifications': { page: '/notifications' },
      '/privacy': { page: '/privacy' },
      '/search': { page: '/search' },
      '/settings': { page: '/settings' },
      '/settings/account': { page: '/settings/account' },
      '/settings/allowance': { page: '/settings/allowance' },
      '/settings/delete': { page: '/settings/delete' },
      '/thanks': { page: '/thanks' }
    }
  },
  reactStrictMode: process.env.NODE_ENV === 'development'
})

const sentryWebpackPluginOptions = {
  silent: true
}

module.exports = withTM(
  withSentryConfig(moduleExports, sentryWebpackPluginOptions)
)
