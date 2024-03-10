// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AddAddressDialog } from '@mimiar-wallet/components';
import { useToggle } from '@mimiar-wallet/hooks';
import { Button } from '@mui/material';
import React from 'react';

function AddAddress() {
  const [open, toggleOpen] = useToggle();

  return (
    <>
      <Button onClick={toggleOpen} variant='outlined'>
        Add New Contact
      </Button>
      <AddAddressDialog onClose={toggleOpen} open={open} />
    </>
  );
}

export default React.memo(AddAddress);
