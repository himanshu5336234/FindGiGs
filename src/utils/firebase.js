// firebase.utils.js
import * as firebase from "firebase/compat/app";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEq5ifv5VbYf1ECOR2_RGLxv-6p6JFSeA",
  authDomain: "begig-dfa58.firebaseapp.com",
  projectId: "begig-dfa58",
  storageBucket: "begig-dfa58.appspot.com",
  messagingSenderId: "747209667342",
  appId: "1:747209667342:web:640ab261c1662ceefa5d5f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
