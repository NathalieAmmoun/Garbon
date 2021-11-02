importScripts('https://www.gstatic.com/firebasejs/7.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

firebase.initializeApp({
  apiKey: "AIzaSyAdpIV3oP132p18FrmbJgzyfg7TqD7jIgs",
  authDomain: "garbon-testing.firebaseapp.com",
  projectId: "garbon-testing",
  storageBucket: "garbon-testing.appspot.com",
  messagingSenderId: "1070460332384",
  appId: "1:1070460332384:web:9365b91405d0e723e41605"
  })

  if (firebase.messaging.isSupported()) {
    firebase.messaging();
  }
  