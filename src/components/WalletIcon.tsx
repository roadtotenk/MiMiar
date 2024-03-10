// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Nova from '@mimiar-wallet/assets/images/nova.svg';
import NovaDisabled from '@mimiar-wallet/assets/images/nova-disabled.png';
import { walletConfig } from '@mimiar-wallet/config';
import { Box, BoxProps } from '@mui/material';
import React from 'react';

interface Props extends BoxProps {
  disabled: boolean;
  id: string;
}

function WalletIcon({ disabled, id, ...props }: Props) {
  const icon = id === 'polkadot-js' && window?.walletExtension?.isNovaWallet ? Nova : walletConfig[id].icon;
  const disabledIcon = id === 'polkadot-js' && window?.walletExtension?.isNovaWallet ? NovaDisabled : walletConfig[id].disabledIcon;

  return <Box component='img' src={disabled ? disabledIcon : icon} {...props} />;
}

export default React.memo(WalletIcon);
