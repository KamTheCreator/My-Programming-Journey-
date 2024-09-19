// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtdhVUQwz6YmbuW2yZvRqUuPmyIse0yOU",
  authDomain: "fir-blog-e1948.firebaseapp.com",
  projectId: "fir-blog-e1948",
  storageBucket: "fir-blog-e1948.appspot.com",
  messagingSenderId: "668563946231",
  appId: "1:668563946231:web:7f1e18fb8be3ecd350b1f2",
  measurementId: "G-ME1WNJ3TED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage()
export const db = getFirestore(app)
  