import {Coin} from './coin.interface';

export const AVAILABLE_COINS: Coin[] = [
  {
    label: 'Bitcoin',
    icon: '/dev/bitcoin.svg',
    id: 'BTC',
    qr: (wallet, note, amount) => `bitcoin:${wallet}?amount=${amount}&label=${note}`,
    color: '#F7931A'
  },
  {
    label: 'Etherium',
    icon: '/dev/etherium.svg',
    id: 'ETH',
    qr: (wallet, note, amount) => `ethereum:${wallet}?amount=${amount}&value=${amount}&data=${note}`,
    color: '#6b71d6'
  }
];
