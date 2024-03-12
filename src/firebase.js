// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMiwq_Phl5sFvnI6XB17Q_ttPa2-Uol38",
  authDomain: "kanban-board-d51ae.firebaseapp.com",
  projectId: "kanban-board-d51ae",
  storageBucket: "kanban-board-d51ae.appspot.com",
  messagingSenderId: "668741230245",
  appId: "1:668741230245:web:6c9215be737efbd9edf74c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, db, auth };
