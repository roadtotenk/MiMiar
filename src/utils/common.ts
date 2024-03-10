// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
