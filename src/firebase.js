import firebase from "firebase";

const config ={
  apiKey: "AIzaSyAdpIV3oP132p18FrmbJgzyfg7TqD7jIgs",
  authDomain: "garbon-testing.firebaseapp.com",
  projectId: "garbon-testing",
  storageBucket: "garbon-testing.appspot.com",
  messagingSenderId: "1070460332384",
  appId: "1:1070460332384:web:9365b91405d0e723e41605"
}

firebase.initializeApp(config);
export default firebase;