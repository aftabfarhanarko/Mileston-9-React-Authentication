
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnk2T3dYPvDX-m9WWiEHuUthO9Ld3Fcys",
  authDomain: "pricktise-email-and-password.firebaseapp.com",
  projectId: "pricktise-email-and-password",
  storageBucket: "pricktise-email-and-password.firebasestorage.app",
  messagingSenderId: "344361094337",
  appId: "1:344361094337:web:dcee4916ba89bc79a05840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
