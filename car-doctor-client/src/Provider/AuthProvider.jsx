import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const Authcontext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children  }) => {
  const [user, setUser] = useState(null);
  const [loading, SetLoading] = useState(true);

  //   creat user
  const creatUser = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin
  const signin = (email, password) => {
    SetLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const signout = () => {
    SetLoading(true);
    return signOut(auth);
  };
  // user state chacking
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      console.log("current User", currentUser);
      SetLoading(false);
      // if user exixt than issue a token
      if (currentUser) {
        axios.post("https://cardoctor-new.vercel.app/jwt", loggedUser, { withCredentials: true })
        .then((res) => {
          console.log('token response',res.data);
        });
      }
      else{
        axios.post("https://cardoctor-new.vercel.app/logout",loggedUser,{withCredentials:true})
        .then(res=>{
          console.log('token response',res.data);
        })
      }

    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // export all contexts
  const authInfo = {
    user,
    loading,
    creatUser,
    signin,
    signout,
  };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
