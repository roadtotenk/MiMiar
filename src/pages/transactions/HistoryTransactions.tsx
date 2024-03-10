// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Empty } from '@mimiar-wallet/components';
import { useHistoryTransactions } from '@mimiar-wallet/hooks';
import { TxCell } from '@mimiar-wallet/transactions';
import { Pagination, Stack } from '@mui/material';
import React from 'react';

function HistoryTransactions({
  address,
  limit: propsLimit = 10,
  page: propsPage = 1,
  setPage
}: {
  address: string;
  page?: number;
  limit?: number;
  setPage: (value: number) => void;
  setLimit: (value: number) => void;
}) {
  const [transactions, page, limit, total] = useHistoryTransactions(address, propsPage, propsLimit);

  if (transactions.length === 0) {
    return <Empty height='80vh' label='No Transactions' />;
  }

  return (
    <Stack spacing={2}>
      {transactions.map((transaction) => (
        <TxCell key={transaction.uuid} transaction={transaction} />
      ))}
      <Pagination
        color='primary'
        count={Math.ceil(total / limit)}
        onChange={(_, page) => {
          setPage(page);
        }}
        page={page}
        shape='rounded'
        variant='outlined'
      />
    </Stack>
  );
}

export default React.memo(HistoryTransactions);
