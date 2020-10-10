import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBUbwznvDbs1jIGcXAjhWOKtTjup36RRY",
  authDomain: "build-me-pc-test.firebaseapp.com",
  databaseURL: "https://build-me-pc-test.firebaseio.com",
  projectId: "build-me-pc-test",
  storageBucket: "build-me-pc-test.appspot.com",
  messagingSenderId: "885602581204",
  appId: "1:885602581204:web:f9032a4bfdccd9c7301941",
  measurementId: "G-W1BPV5VSG5",
};

const firebasedApp = firebase.initializeApp(firebaseConfig);

const db = firebasedApp.firestore();

export default db;
