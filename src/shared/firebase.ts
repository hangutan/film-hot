import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

interface FIREBASE_PROPS {
  apiKey: string,
  authDomain: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
  measurementId: string,
}

const VITE_FIREBASE_CONFIG: FIREBASE_PROPS = {
  apiKey: "AIzaSyDHJJtBSNQJj8twb2jRAmAYX3mu-PL_KfU",
  authDomain: "netfix-clone-84500.firebaseapp.com",
  projectId: "netfix-clone-84500",
  storageBucket: "netfix-clone-84500.appspot.com",
  messagingSenderId: "64991043843",
  appId: "1:64991043843:web:db8c6e4b7278f0fffd4936",
  measurementId: "G-WN2W1SZ0QX"
}

export const firebaseApp = initializeApp(
  // JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG as string)
  VITE_FIREBASE_CONFIG
);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
