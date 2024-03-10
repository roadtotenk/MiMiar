// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DappOption } from '@mimiar-wallet/config';

import { DappCell } from '@mimiar-wallet/components';
import Grid from '@mui/material/Unstable_Grid2';

function FavoriteDapps({
  addFavorite,
  dapps,
  isFavorite,
  removeFavorite
}: {
  dapps: DappOption[];
  isFavorite: (id: number) => boolean;
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}) {
  return (
    <Grid columns={{ xs: 12 }} container spacing={2.5}>
      {dapps.map((dapp, index) => {
        return (
          <Grid key={index} lg={4} sm={6} xs={12}>
            <DappCell addFavorite={addFavorite} dapp={dapp} isFavorite={isFavorite} removeFavorite={removeFavorite} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FavoriteDapps;
