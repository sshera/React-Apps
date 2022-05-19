import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQR3lq-OhY3Xsdz3LCRY44ig9WZApU4Ug",
    authDomain: "linkedin-44022.firebaseapp.com",
    projectId: "linkedin-44022",
    storageBucket: "linkedin-44022.appspot.com",
    messagingSenderId: "882676547721",
    appId: "1:882676547721:web:0514b997079f9b31448658"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };