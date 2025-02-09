import {bch, bsv, btc, eth, ltc, xmr, doge, usdt, bnb, init} from '../src';
import '../src/elements/crypto-trigger';

btc.wallet = 'bc1qk4th7mv0qzfxup5avrecratg24u9e0l56k9x7e';
eth.wallet = '0x751721F9754A35B4f86BaE06295406ea335eba46';
ltc.wallet = 'LUKqmHBopaX2PS7zndewaEUwWFGZvX3htC';
bch.wallet = 'qpanrffk9xpymjetvm8pf5pxx95zp5hc7sld6qzyrt';
bsv.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGUq';
xmr.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGU';
doge.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGU';
usdt.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGU';
bnb.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGU';

init([
  btc,
  eth,
  ltc,
  bch,
  bsv,
  xmr,
  doge,
  usdt,
  bnb
]);

window.onload = () => {
	const value = 1;

	const triggerEl = document.getElementById('crypto');

	triggerEl.addEventListener('click', () => {
		const el = window.jpCrypto.open({
			value,
			message: 'some-other-example',
			paidTemplate: `Thank you for using crypto`,
			instructionsTemplate: 'Use the below to pay.',
			coin: 'ETH',
      target: document.querySelector('.wrapper-inner')
		});

		el.addEventListener('paid', a => {
			console.log('Someone paid', a);
		})
	})
};
