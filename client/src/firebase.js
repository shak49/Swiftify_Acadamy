// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "swiftify-academy.firebaseapp.com",
  projectId: "swiftify-academy",
  storageBucket: "swiftify-academy.firebasestorage.app",
  messagingSenderId: "124653964012",
  appId: "1:124653964012:web:53949fc4d2d12e425df3c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);