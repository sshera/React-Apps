import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAfZh-6yqSjq6KPGxcnb4kkQRu9g-c9LUE",
    authDomain: "snapchat-8f589.firebaseapp.com",
    projectId: "snapchat-8f589",
    storageBucket: "snapchat-8f589.appspot.com",
    messagingSenderId: "225579127267",
    appId: "1:225579127267:web:b358126ba454d8285b10d6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider, storage };