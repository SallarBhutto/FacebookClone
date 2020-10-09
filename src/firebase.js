// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYBENZiMCbmrWEHZe2j1GCV7uVgMgh6LM",
  authDomain: "fb-clone-25114.firebaseapp.com",
  databaseURL: "https://fb-clone-25114.firebaseio.com",
  projectId: "fb-clone-25114",
  storageBucket: "fb-clone-25114.appspot.com",
  messagingSenderId: "524620486529",
  appId: "1:524620486529:web:2b34a8b6416fd859a8ba80",
  measurementId: "G-HK4MEW72T5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
