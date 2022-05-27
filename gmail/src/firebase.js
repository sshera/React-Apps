import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcXs-TXK2vLOuUpQahBy7DnUeNNW71wCU",
    authDomain: "fir-312bf.firebaseapp.com",
    projectId: "fir-312bf",
    storageBucket: "fir-312bf.appspot.com",
    messagingSenderId: "184581314941",
    appId: "1:184581314941:web:5ede43d2fde1aa79d65414"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };