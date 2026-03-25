// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9xVBUuPtpwBAw7s6o_Umt7wyyEnJSx3E",
  authDomain: "consultancy-78dd1.firebaseapp.com",
  databaseURL: "https://consultancy-78dd1-default-rtdb.firebaseio.com",
  projectId: "consultancy-78dd1",
  storageBucket: "consultancy-78dd1.firebasestorage.app",
  messagingSenderId: "292066174906",
  appId: "1:292066174906:web:c4b42e285a51d10a69df83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
