// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Box } from '@mui/material';
import lottie, { AnimationItem } from 'lottie-web';
import { useEffect, useRef } from 'react';

import DataJson from './mimiar-loading.json';

function mimiarLoading() {
  const container = useRef<HTMLDivElement>();

  useEffect(() => {
    let animation: AnimationItem | null = null;

    if (container.current) {
      animation = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: DataJson
      });
    }

    return () => {
      animation?.destroy();
    };
  }, []);

  return <Box ref={container} sx={{ width: 160, height: 100 }} />;
}

export default mimiarLoading;
