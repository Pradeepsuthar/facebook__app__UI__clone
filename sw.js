// install service wroker
self.addEventListener('install', evnt => {
    console.log("Service worker has been installed");
});

// activate service worker
self.addEventListener('activate', evnt => {
    console.log("Service worker has been activated");
});

// fetch event
self.addEventListener('fetch', evnt => {
    // console.log("Fetch request",evnt);
});