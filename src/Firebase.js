import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBbyhoD2zRElFd6fzUoY1RglVYRXVdCFZU",
  authDomain: "mt-15c0b.firebaseapp.com",
  projectId: "mt-15c0b",
  storageBucket: "mt-15c0b.appspot.com",
  messagingSenderId: "899692029477",
  appId: "1:899692029477:web:6e3e90259fa1997bcfc1cc"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.auth()
