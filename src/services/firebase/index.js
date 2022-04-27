// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB07A4Cs6reJaTlWZ_AtqZuyuCJpbo-FZc",
  authDomain: "mcdonalds-react-app.firebaseapp.com",
  projectId: "mcdonalds-react-app",
  storageBucket: "mcdonalds-react-app.appspot.com",
  messagingSenderId: "1039348800925",
  appId: "1:1039348800925:web:b2fd585ca7b572e7cfe374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);