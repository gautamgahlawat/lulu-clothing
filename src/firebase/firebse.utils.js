import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCU6mhQHS9MnasnK6armEdfvTZR1rwNawU",
  authDomain: "lulu-db.firebaseapp.com",
  databaseURL: "https://lulu-db.firebaseio.com",
  projectId: "lulu-db",
  storageBucket: "lulu-db.appspot.com",
  messagingSenderId: "148963001067",
  appId: "1:148963001067:web:5513d7266e3d54776ff4ae"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
