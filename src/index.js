// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1I4ThOtSpYmgJpfokRYG4YBf92FPMsr4",
  authDomain: "test1-69a25.firebaseapp.com",
  projectId: "test1-69a25",
  storageBucket: "test1-69a25.appspot.com",
  messagingSenderId: "506512410509",
  appId: "1:506512410509:web:8e32944b53bf8fe1871fc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
setActiveScreen("loginPage");
// setActiveScreen("registerPage");
// setActiveScreen("chatPage");
// setActiveScreen("resetPasswordPage");
