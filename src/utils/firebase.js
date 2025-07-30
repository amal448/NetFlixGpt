// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCa0jvPcWJ6tQN6l9L5h_cblGHG-C6h4g",
  authDomain: "netflix-gpt-f62a3.firebaseapp.com",
  projectId: "netflix-gpt-f62a3",
  storageBucket: "netflix-gpt-f62a3.firebasestorage.app",
  messagingSenderId: "352789336895",
  appId: "1:352789336895:web:c6bb0d8f1076fc992d798a",
  measurementId: "G-YJVDTQDDZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
amal448/NetFlixGpt
amal448/NetFlixGpt