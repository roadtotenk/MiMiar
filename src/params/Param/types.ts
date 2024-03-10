// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ParamDef, ParamType, RawParam } from '../types';

export interface ParamProps {
  param: ParamDef;
  value: RawParam;
  type: ParamType;
}
export type ComponentMap = Record<string, React.ComponentType<ParamProps>>;
