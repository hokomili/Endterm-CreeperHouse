import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";
// Initialize the FirebaseUI Widget using Firebase.

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

firebase.initializeApp(firebaseConfig);