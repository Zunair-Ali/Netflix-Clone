// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyARgAdhfr68rqi1fIyXf-xhD6aYXoozNxY",
  authDomain: "netflix-clone-3885c.firebaseapp.com",
  projectId: "netflix-clone-3885c",
  storageBucket: "netflix-clone-3885c.firebasestorage.app",
  messagingSenderId: "699747787863",
  appId: "1:699747787863:web:db09eb64f5ca25d0c12f12",
  measurementId: "G-CV35BM1CJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db = getFirestore(app);
const signup = async(name,email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
        email: email,
        authProvider : "local",
        });
  }
   catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
    
  }
}
const login =  async(email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
    
  }
}

const logout = () => {
    signOut(auth)
    }


export { auth, db, signup, login, logout};