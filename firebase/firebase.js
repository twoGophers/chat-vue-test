import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC1dFKAwJ8nzzm4AK984bf6Yj_VOARw6w4",
    authDomain: "chat-testvue.firebaseapp.com",
    databaseURL: "https://chat-testvue-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-testvue",
    storageBucket: "chat-testvue.appspot.com",
    messagingSenderId: "420195582025",
    appId: "1:420195582025:web:d09f3ca10dcf04253c3f98"
  };

  // Initialize Firebase
  
const db = firebase.initializeApp(firebaseConfig);
export default db;