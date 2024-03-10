// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Fearless from '@mimiar-wallet/assets/images/fearless.png';
import FearlessDisabled from '@mimiar-wallet/assets/images/fearless-disabled.png';
import PolkadotJs from '@mimiar-wallet/assets/images/polkadotjs.svg';
import PolkadotJsDisabled from '@mimiar-wallet/assets/images/polkadotjs-disabled.svg';
import Subwallet from '@mimiar-wallet/assets/images/subwallet.png';
import SubwalletDisabled from '@mimiar-wallet/assets/images/subwallet-disabled.svg';
import Talisman from '@mimiar-wallet/assets/images/talisman.svg';
import TalismanDisabled from '@mimiar-wallet/assets/images/talisman-disabled.svg';

export type WalletConfig = {
  icon: string;
  disabledIcon: string;
  name: string;
  downloadUrl: string;
};

export const walletConfig: Record<string, WalletConfig> = {
  'subwallet-js': {
    icon: Subwallet,
    disabledIcon: SubwalletDisabled,
    name: 'SubWallet',
    downloadUrl: 'https://www.subwallet.app/zh/'
  },
  talisman: {
    icon: Talisman,
    disabledIcon: TalismanDisabled,
    name: 'Talisman',
    downloadUrl: 'https://www.talisman.xyz/'
  },
  'fearless-wallet': {
    icon: Fearless,
    disabledIcon: FearlessDisabled,
    name: 'Fearless',
    downloadUrl: 'https://fearlesswallet.io/'
  },
  'polkadot-js': {
    icon: PolkadotJs,
    disabledIcon: PolkadotJsDisabled,
    name: 'Polkadot.js',
    downloadUrl: 'https://polkadot.js.org/extension/'
  }
};
