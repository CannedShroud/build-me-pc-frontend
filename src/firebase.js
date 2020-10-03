import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8doN7IiLkaJ2MnuGAgatcxFHdpbq8Rew",
  authDomain: "build-me-pc-9fe8e.firebaseapp.com",
  databaseURL: "https://build-me-pc-9fe8e.firebaseio.com",
  projectId: "build-me-pc-9fe8e",
  storageBucket: "build-me-pc-9fe8e.appspot.com",
  messagingSenderId: "267054503454",
  appId: "1:267054503454:web:b39bd51887183b04b2000f",
  measurementId: "G-2CDW1H3S83",
};

const firebasedApp = firebase.initializeApp(firebaseConfig);

const db = firebasedApp.firestore();

export default db;
