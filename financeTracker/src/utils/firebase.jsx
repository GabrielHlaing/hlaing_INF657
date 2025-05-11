// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5TX1T-hAdJelYfYRejQ_9j0v1qD_dTNY",
  authDomain: "finance-tracker-8e15a.firebaseapp.com",
  projectId: "finance-tracker-8e15a",
  storageBucket: "finance-tracker-8e15a.firebasestorage.app",
  messagingSenderId: "337717596481",
  appId: "1:337717596481:web:2178a275e81fd312c311c0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
