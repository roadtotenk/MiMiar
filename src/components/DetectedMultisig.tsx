// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ReactComponent as IconExternal } from '@mimiar-wallet/assets/svg/icon-external-app.svg';
import { ReactComponent as Logo } from '@mimiar-wallet/assets/svg/logo-circle.svg';
import { useUnConfirmMultisigs } from '@mimiar-wallet/hooks';
import { getAddressMeta } from '@mimiar-wallet/utils';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import keyring from '@polkadot/ui-keyring';
import { useMemo } from 'react';

import Address from './Address';
import AddressRow from './AddressRow';
import BalanceFree from './BalanceFree';

function Item({ address, withEdit }: { address: string; withEdit: boolean }) {
  const { breakpoints } = useTheme();
  const downSm = useMediaQuery(breakpoints.down('sm'));

  return (
    <Box sx={{ padding: 1, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between', borderRadius: 1, border: '1px solid', borderColor: 'grey.300' }}>
      <Box sx={{ flex: '1.3', display: 'flex', alignItems: 'center' }}>
        <AddressRow shorten size='small' value={address} withEdit={withEdit} withName />
      </Box>
      {!downSm && (
        <Typography sx={{ flex: '1.2' }}>
          <Address shorten value={address} />
        </Typography>
      )}
      <Box sx={{ flex: '1', textAlign: 'right' }}>
        <BalanceFree params={address} />
      </Box>
    </Box>
  );
}

function DetectedDialog({ multisigs }: { multisigs: string[] }) {
  const [mimiars, externals] = useMemo((): [string[], string[]] => {
    const mimiars: string[] = [];
    const externals: string[] = [];

    multisigs.forEach((address) => {
      const meta = getAddressMeta(address);

      if (meta.ismimiar) {
        mimiars.push(address);
      } else {
        externals.push(address);
      }
    });

    return [mimiars, externals];
  }, [multisigs]);

  return (
    <Dialog fullWidth maxWidth='sm' open>
      <DialogTitle>New Multisig Account Detected</DialogTitle>
      <DialogContent>
        <Stack spacing={1.5}>
          {mimiars.length > 0 && (
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
              <Logo />
              mimiar
            </Typography>
          )}
          {mimiars.map((item) => (
            <Item address={item} key={item} withEdit={false} />
          ))}
          {externals.length > 0 && (
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
              <SvgIcon color='primary' component={IconExternal} inheritViewBox />
              External
            </Typography>
          )}
          {externals.map((item) => (
            <Item address={item} key={item} withEdit />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          onClick={() => {
            try {
              for (const address of mimiars.concat(externals)) {
                const pair = keyring.getPair(address);

                keyring.saveAccountMeta(pair, { isConfirm: true });
              }
            } catch {}
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function DetectedMultisig() {
  const multisigs = useUnConfirmMultisigs();

  if (multisigs.length === 0) {
    return null;
  }

  return <DetectedDialog multisigs={multisigs} />;
}

export default DetectedMultisig;
