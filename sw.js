self.addEventListener('install', event => {
    console.log("kotik installing...");
    event.waitUntil(
        caches.open("kotik").then((cache) =>
            cache.add(['/img/sym4.png']))
    );
});

self.addEventListener('activate', event => {
    console.log('kotik now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
    console.log('kotik fetch!');
});

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));
}

function update(request) {
    return caches.open(CACHE).then((cache) =>
        fetch(request).then((response) =>
            cache.put(request, response)
        )
    );
}