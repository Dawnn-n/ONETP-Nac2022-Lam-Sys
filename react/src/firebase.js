// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFtLgqFVkYfXVoev-lEQGIXlBv5Oagsyo",
  authDomain: "blue-code-849a5.firebaseapp.com",
  projectId: "blue-code-849a5",
  storageBucket: "blue-code-849a5.appspot.com",
  messagingSenderId: "479615132315",
  appId: "1:479615132315:web:74c5f9b67dfb6c1ebc1c3e",
  databaseURL: "https://blue-code-849a5-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)