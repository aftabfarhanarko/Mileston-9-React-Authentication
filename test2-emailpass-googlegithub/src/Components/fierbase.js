import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRFSqI_yCXazrvMkFo9srJsnMqjxex8og",
  authDomain: "test2-pricktise-emai.firebaseapp.com",
  projectId: "test2-pricktise-emai",
  storageBucket: "test2-pricktise-emai.firebasestorage.app",
  messagingSenderId: "197337228555",
  appId: "1:197337228555:web:f9d8126c2fa88fae926e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
