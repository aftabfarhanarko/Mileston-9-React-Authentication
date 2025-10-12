
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApvGbz3PN14o3aTrUS6uH8dNjcz577Fj4",
  authDomain: "cktise-project.firebaseapp.com",
  projectId: "cktise-project",
  storageBucket: "cktise-project.firebasestorage.app",
  messagingSenderId: "29555208715",
  appId: "1:29555208715:web:5781b1c475e9e1872f4d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
