import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0Z1RiFSy-h56p3W_0bmJ7kxr1qpC-o9o",
    authDomain: "clone-by-sagar-jadhav.firebaseapp.com",
    projectId: "clone-by-sagar-jadhav",
    storageBucket: "clone-by-sagar-jadhav.appspot.com",
    messagingSenderId: "340502693188",
    appId: "1:340502693188:web:66d1bb043bf1e8e8e58311",
    measurementId: "G-KM2KLTR07C"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};