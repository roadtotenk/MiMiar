// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ReactComponent as IconCopy } from '@mimiar-wallet/assets/svg/icon-copy.svg';
import { ReactComponent as IconSuccess } from '@mimiar-wallet/assets/svg/icon-success.svg';
import { useCopyClipboard } from '@mimiar-wallet/hooks';
import { IconButton, IconButtonProps, SvgIcon } from '@mui/material';
import React, { useCallback } from 'react';

interface Props extends IconButtonProps {
  value?: string;
}

function CopyButton({ value, ...props }: Props) {
  const [copied, copy] = useCopyClipboard();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      copy(value?.toString() || '');
    },
    [copy, value]
  );

  return (
    <IconButton color='inherit' onClick={handleClick} size='small' sx={{ opacity: 0.7 }} {...props}>
      <SvgIcon component={copied ? IconSuccess : IconCopy} inheritViewBox />
    </IconButton>
  );
}

export default React.memo(CopyButton);
