// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { RouteMatchCallbackOptions } from 'workbox-core';

export function isDevelopment() {
  return Boolean(
    self.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address
      self.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4
      self.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );
}

export function ismimiar(hostname: string) {
  return hostname === 'dev.mimiar.global' || hostname === 'app.mimiar.global';
}

export function matchStatic({ request, url }: RouteMatchCallbackOptions) {
  return !isDevelopment() && ['dev.mimiar.global', 'app.mimiar.global'].includes(url.hostname) && ['font', 'image'].includes(request.destination);
}

export function matchJs({ request }: RouteMatchCallbackOptions) {
  return !isDevelopment() && request.destination === 'script';
}

export function matchCss({ request }: RouteMatchCallbackOptions) {
  return !isDevelopment() && request.destination === 'style';
}

export async function clearCache(cacheName: string) {
  return caches.delete(cacheName);
}

export async function deleteUnusedCaches(caches: CacheStorage, { usedCaches }: { usedCaches: string[] }) {
  const cacheKeys = await caches.keys();

  cacheKeys.filter((key) => !usedCaches.includes(key)).forEach((key) => caches.delete(key));
}
