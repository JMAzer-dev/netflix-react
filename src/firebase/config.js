// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const {
  initializeAppCheck,
  ReCaptchaV3Provider,
} = require("firebase/app-check");

const firebaseConfig = {
  apiKey: "AIzaSyBl2sCSEASt5O2HuJQUO7Ot9fLJIs9oPBk",
  authDomain: "netflix-react-18735.firebaseapp.com",
  projectId: "netflix-react-18735",
  storageBucket: "netflix-react-18735.appspot.com",
  messagingSenderId: "564588903852",
  appId: "1:564588903852:web:3ed8bb9c6a0e0881334e09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("abcdefghijklmnopqrstuvwxy-1234567890abcd"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});
