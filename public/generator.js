const workbox = require("workbox-build");

workbox.generateSW({
    cacheId: "rootCache",
    globDirectory: "./",
    globPatterns: [
        "**/*.{css,js}"
    ],
    swDest: "sw.js",
    runtimeCaching: [
        {
            urlPattern: /\.(?:html)$/,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "html resources",
                expiration: {
                    maxAgeSeconds: 1800
                }
            }
        }
    ]
});