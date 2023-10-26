import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "./Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = async (email, password, name, imageLink) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update user's profile with name and imageLink
      await updateProfile(user, {
        displayName: name,
        photoURL: imageLink,
      });

      // Fetch the user data after updating the profile (in case it's cached)
      const updatedUser = auth.currentUser;

      return updatedUser; // Return the modified user object
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Optionally re-throw the error to be handled elsewhere
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleMethod = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleMethod,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
