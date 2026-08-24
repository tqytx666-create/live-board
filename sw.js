// 极简 service worker:全部直通网络,不缓存页面,保证永远最新版
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => {});
