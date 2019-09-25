import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA3a_LTFZZkexqMEsU_OsdOwCPmBK6JI-0",
  authDomain: "ecommerce-webapp-56e9a.firebaseapp.com",
  databaseURL: "https://ecommerce-webapp-56e9a.firebaseio.com",
  projectId: "ecommerce-webapp-56e9a",
  storageBucket: "",
  messagingSenderId: "808232699193",
  appId: "1:808232699193:web:90adad79c0151547b2d4e8",
  measurementId: "G-RH8RSEVCXL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
