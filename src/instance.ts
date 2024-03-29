// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringStore } from '@polkadot/ui-keyring/types';

import { BrowserStore } from '@polkadot/ui-keyring/stores/Browser';

export const store: KeyringStore = new BrowserStore();
