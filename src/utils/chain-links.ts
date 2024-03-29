// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { HexString } from '@polkadot/util/types';

import { api } from '@mimiar-wallet/api';
import { allEndpoints } from '@mimiar-wallet/config';
import keyring from '@polkadot/ui-keyring';
import { isAddress } from '@polkadot/util-crypto';

export function accountExplorerLink(value?: AccountId | AccountIndex | Address | HexString | string | null): string | undefined {
  const _value = value?.toString();

  if (_value && _value.length > 47 && isAddress(_value)) {
    const explorerUrl = allEndpoints.find((item) => item.genesisHash === api.genesisHash.toHex())?.explorerUrl;

    if (explorerUrl) {
      return `${explorerUrl}account/${keyring.encodeAddress(_value, api.registry.chainSS58)}`;
    }
  }

  return undefined;
}

export function subsquareUrl(path?: string): string | undefined {
  const baseUrl = allEndpoints.find((item) => item.genesisHash === api.genesisHash.toHex())?.subsquareUrl;

  return baseUrl ? `${baseUrl}${path || ''}` : undefined;
}

export function proposalApi(): string | undefined {
  return allEndpoints.find((item) => item.genesisHash === api.genesisHash.toHex())?.proposalApi;
}

export async function serviceUrl(path: string): Promise<string> {
  await api.isReady;

  const url: string = allEndpoints.find((item) => item.genesisHash === api.genesisHash.toHex())?.serviceUrl || 'http://127.0.0.1:8080/';

  return `${url}${path}`;
}
