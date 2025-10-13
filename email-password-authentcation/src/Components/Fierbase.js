// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPyfbJmOsQ9LgYhUei46408ecuvTtXngA",
  authDomain: "mail-password-auth-aa3db.firebaseapp.com",
  projectId: "mail-password-auth-aa3db",
  storageBucket: "mail-password-auth-aa3db.firebasestorage.app",
  messagingSenderId: "628920661849",
  appId: "1:628920661849:web:41f64abb6b0c9eefbabe48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

