import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/fierbase";

const googleprovider = new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  // ✅ Create new user
  const creatUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login existing user (with persistence)
  const loginUser = (email, password, rememberMe = true) => {
    setLoding(true);
    const persistenceType = rememberMe
      ? browserLocalPersistence // stay after browser close
      : browserSessionPersistence; // only for current session

    return setPersistence(auth, persistenceType).then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    });
  };

  // ✅ Google login
  const googleLoging = () => {
    return signInWithPopup(auth, googleprovider);
  };

  // ✅ GitHub login
  const githubLoging = () => {
    return signInWithPopup(auth, gitHubprovider);
  };

  // ✅ Logout user
  const usersignOuts = () => {
    return signOut(auth);
  };

  // ✅ Update user profile
  const ubdeatUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const passwordResetemailUser = () =>{
    return sendEmailVerification(auth.currentUser);
  }

  // ✅ Track current user state
  useEffect(() => {
    const unsubcrip = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });

    return () => {
      unsubcrip();
    };
  }, []);

  const authData = {
    user,
    creatUser,
    loginUser,
    usersignOuts,
    loding,
    setLoding,
    ubdeatUserProfile,
    setUser,
    googleLoging,
    githubLoging,
    passwordResetemailUser
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
