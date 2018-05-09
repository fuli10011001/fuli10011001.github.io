var CACHE_NAME = 'my-site-cache-v3';
var urlsToCache = [
    '/',
    'css/freelancer.min.css'
];

self.addEventListener('install', function(event) {
    // perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('opened cache.');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

// self.addEventListener('push', function(e) {
//   var options = {
//     body: 'This notification was generated from a push!',
//     icon: 'img/profile.png',
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: '2'
//     },
//     actions: [
//       {action: 'explore', title: 'Explore this new world',
//         icon: 'img/checkmark.jpg'},
//       {action: 'close', title: 'Close',
//         icon: 'img/xmark.jpg'},
//     ]
//   };
//   e.waitUntil(
//     self.registration.showNotification('Hello world!', options)
//   );
// });

self.addEventListener('push', function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Push message no payload';
  }

  var options = {
    body: body,
    icon: 'img/profile.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'OK',
        icon: 'img/profile.png'},
      {action: 'close', title: 'Cancel',
        icon: 'img/profile.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;
  console.log('notification');
  console.log(notification);

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.baidu.com');
    notification.close();
  }
});

// sync will fire when the user agent believes the user has connectivity.
self.addEventListener('sync', function(event) {
  if (event.tag == 'outbox') {
    event.waitUntil(doSomeStuff());
  }
});

self.addEventListener('periodicsync', function(event) {
  if (event.registration.tag == 'get-latest-news') {
    event.waitUntil(doSomeStuff());
  }
  else {
    // unknown sync, may be old, best to unregister
    event.registration.unregister();
  }
});

function doSomeStuff() {
  console.log('do some staff!');

  var options = {
    body: 'do some staff!',
    icon: 'img/profile.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'OK',
        icon: 'img/profile.png'},
      {action: 'close', title: 'Cancel',
        icon: 'img/profile.png'},
    ]
  };
  self.registration.showNotification('Push Notification', options)

  return Promise.resolve();
}