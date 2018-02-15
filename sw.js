const CACHE = 'kotik_cache';

self.addEventListener('install', event => {
    console.log("kotik installing...");
    event.waitUntil(
        caches.open(CACHE).then((cache) =>
            cache.add('img/sym4.png'))
    );
});

self.addEventListener('activate', event => {
    console.log('kotik now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
    console.log('kotik fetch!');
    const url = new URL(event.request.url);
    if (url.origin == location.origin && url.pathname == 'icon.png') {
        event.respondWith(caches.match('sym4.png'));
    }
    //event.respondWith(fromCache(event.request));
    //event.waitUntil(update(event.request));
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