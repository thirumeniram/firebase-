// import React, { useContext, useState, useEffect } from "react"
// import { auth } from "../firebase"
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up successfully
//       const user = userCredential.user;
//       return user;
//     })
//     .catch((error) => {
//       throw new Error(error.message);
//     });
// }
// const AuthContext = React.createContext()

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

  
//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password).catch((error) => {
//       throw new Error(error.message);
//     });
//   }
  
//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password)
//   }

//   function logout() {
//     return auth.signOut()
//   }

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email)
//   }

//   function updateEmail(email) {
//     return currentUser.updateEmail(email)
//   }

//   function updatePassword(password) {
//     return currentUser.updatePassword(password)
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//       setLoading(false)
//     })

//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }

// import React, { useContext, useState, useEffect } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, updateEmail, updatePassword, getAuth, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);
//   const auth = getAuth();

//   function signup(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up successfully
//         const user = userCredential.user;
//         return user;
//       })
//       .catch((error) => {
//         throw new Error(error.message);
//       });
//   }

//   function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function logout() {
//     return signOut(auth);
//   }

//   function resetPassword(email) {
//     return sendPasswordResetEmail(auth, email);
//   }

//   function updateEmail(email) {
//     return updateEmail(currentUser, email);
//   }

//   function updatePassword(password) {
//     return updatePassword(currentUser, password);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return updateEmail(currentUser, email);
  }

  function updatePassword(password) {
    return updatePassword(currentUser, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

