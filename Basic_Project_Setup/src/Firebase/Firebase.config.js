// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy9XeSEywz_izqXPpLnVhO7KI_uSHTWjg",
  authDomain: "basic-project-setup-af67d.firebaseapp.com",
  projectId: "basic-project-setup-af67d",
  storageBucket: "basic-project-setup-af67d.firebasestorage.app",
  messagingSenderId: "363047931266",
  appId: "1:363047931266:web:2cc95b4207fde493add39b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);