import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG0K1ioByt5WVZlrIP2cJQNfXaR5taDuA",
  authDomain: "react-priver-route-auth.firebaseapp.com",
  projectId: "react-priver-route-auth",
  storageBucket: "react-priver-route-auth.firebasestorage.app",
  messagingSenderId: "186905621269",
  appId: "1:186905621269:web:76fa391acc3c02e9392f1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
