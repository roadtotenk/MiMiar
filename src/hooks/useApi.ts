// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiProps } from '@mimiar-wallet/api/types';

import { ApiCtx } from '@mimiar-wallet/api';
import { useContext } from 'react';

import { createNamedHook } from './createNamedHook';

function useApiImpl(): ApiProps {
  return useContext(ApiCtx);
}

export const useApi = createNamedHook('useApi', useApiImpl);
