// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe51owa4jazdhfxnzdjwGxdcP2yKnXric",
  authDomain: "thong312-de83c.firebaseapp.com",
  projectId: "thong312-de83c",
  storageBucket: "thong312-de83c.appspot.com",
  messagingSenderId: "791720798805",
  appId: "1:791720798805:web:7bda7219a2d49301b2c2dc",
  measurementId: "G-961PDWMYQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();