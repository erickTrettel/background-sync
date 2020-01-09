importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

const apiBaseUrl = 'jsonplaceholder.typicode.com/'

self.addEventListener('install', evt => {
  self.skipWaiting();
});

// use with sendNotification method
self.addEventListener('sync', function(event) {
  self.registration.showNotification("Sync event fired!");
});

// create a request queue using workbox 
// will make the request as soon as the app goes online again
const queue = new workbox.backgroundSync.Queue('requestQueue');

// fetch event
self.addEventListener('fetch', evt => {
  // intercept only when making a request to the API
  if (evt.request.url.indexOf(apiBaseUrl) !== -1) {
    // Clone the request to ensure it's safe to read when
    // adding to the Queue.
    const promiseChain = fetch(evt.request.clone())
      .catch((err) => {
        return queue.pushRequest({ request: evt.request });
      });

    evt.waitUntil(promiseChain);
  }
});

