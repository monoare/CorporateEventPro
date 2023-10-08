import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Create user with email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   create user with google
  const googleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   create user with gitHub
  const gitHubUser = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    googleUser,
    gitHubUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
