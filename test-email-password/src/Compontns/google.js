
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnTK7Qn0UQAsveB-JgqOxB9lUyNlm5tlE",
  authDomain: "powerfull-validitions.firebaseapp.com",
  projectId: "powerfull-validitions",
  storageBucket: "powerfull-validitions.firebasestorage.app",
  messagingSenderId: "812288153547",
  appId: "1:812288153547:web:a472ebbe8281977e93c84e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
