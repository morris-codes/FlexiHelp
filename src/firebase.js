// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3osU8qyNwvFTaYcPu5IwRrBtVDQDGlxo",
  authDomain: "flexihelp-a71d1.firebaseapp.com",
  projectId: "flexihelp-a71d1",
  storageBucket: "flexihelp-a71d1.firebasestorage.app",
  messagingSenderId: "831348802067",
  appId: "1:831348802067:web:17f910ff9909c0b191f5e6",
  measurementId: "G-YR8K20E5G7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
