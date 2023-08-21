import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBsrhNep29manplksO_MR7H09AWxbgRU4",
  authDomain: "realchat-e2c7a.firebaseapp.com",
  projectId: "realchat-e2c7a",
  storageBucket: "realchat-e2c7a.appspot.com",
  messagingSenderId: "712818512703",
  appId: "1:712818512703:web:2484d3db4d3a0f3d87398a",
  measurementId: "G-CDSMEG0096",
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth =  getAuth(app)

export { db, auth }