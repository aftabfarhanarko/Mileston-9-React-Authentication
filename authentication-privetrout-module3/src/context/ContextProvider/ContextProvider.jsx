import React, { useEffect, useState } from "react";
import { AuthContext } from "../MyContext/MyContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../fierbase/row";

const ContextProvider = ({ children }) => {
  const [usersa, setUsersa] = useState(null);
  const [loding, setLoding] = useState(true);
  // User Creat
  const contextuse = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
   const signOutUser = () => {
    setLoding(true);
    return signOut(auth);
   }


  //User Loging
  const signINUser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Loging User Data Find in Firebase
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("IF COmditions Chack", user);
    } else {
      console.log("Else COmditions Chack", user);
    }
  });

   useEffect(() => {
    // mout
    const unsubcripet = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User Loging", currentUser);
      setUsersa(currentUser);
      setLoding(false);
    });

    // clear the unmout
    return () => {
      unsubcripet();
    };
  }, []);

  //Contex Value Provied
  const users = {
    usersa,
    loding,
    contextuse,
    signINUser,
    signOutUser
  };
  return (
    <div>
      <AuthContext.Provider value={users}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
