import { STATIC_ASSETS } from 'src/constants'

const getWalletLogo = (name: string): string => {
  switch (name) {
    case 'WalletConnect':
      return `${STATIC_ASSETS}/wallets/walletconnect.svg`
    case 'Torus':
      return `${process.env.NEXT_PUBLIC_URL}/img/torus.png`
    default:
      return `${STATIC_ASSETS}/wallets/browser-wallet.svg`
  }
}

export default getWalletLogo
