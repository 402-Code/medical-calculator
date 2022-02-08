import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
// import { precacheAndRoute } from 'workbox-precaching';

// console.log("SW runs!");

// Use with precache injection
// precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /\.(?:jsx|js|css|http)$/,
  //   new RegExp('\\.jsx$'),
  new CacheFirst({
    cacheName: "jsx",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.origin === "https://fonts.googleapis.com",
  new CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      //   new CacheableResponsePlugin({
      //     statuses: [0, 200],
      //   }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);
