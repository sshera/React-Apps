import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYO2Ps5eSAknLTAUBZzYVfGZlHnYboFFA",
    authDomain: "slack-3f753.firebaseapp.com",
    projectId: "slack-3f753",
    storageBucket: "slack-3f753.appspot.com",
    messagingSenderId: "312703428631",
    appId: "1:312703428631:web:4e906100ea0ed5f7a11452"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };