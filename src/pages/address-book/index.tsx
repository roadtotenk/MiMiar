// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useAddresses } from '@mimiar-wallet/hooks';
import { Stack } from '@mui/material';

import AddAddress from './AddAddress';
import AddressItem from './AddressItem';

function PageAddressBook() {
  const { allAddresses } = useAddresses();

  return (
    <>
      <AddAddress />
      <Stack marginTop={2} spacing={2}>
        {allAddresses.map((address) => {
          return <AddressItem address={address} key={address} />;
        })}
      </Stack>
    </>
  );
}

export default PageAddressBook;
