// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1dc5b.firebaseapp.com",
  projectId: "mern-estate-1dc5b",
  storageBucket: "mern-estate-1dc5b.appspot.com",
  messagingSenderId: "856584992394",
  appId: "1:856584992394:web:2887f47e31d005f14d9f73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);