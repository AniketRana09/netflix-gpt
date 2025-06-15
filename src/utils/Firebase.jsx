// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDETVq2mm7k-YrODxUoU193FrwoARujrFM",
  authDomain: "netani-gpt.firebaseapp.com",
  projectId: "netani-gpt",
  storageBucket: "netani-gpt.firebasestorage.app",
  messagingSenderId: "603045027684",
  appId: "1:603045027684:web:abf2cf2c32df0e01fd2471",
  measurementId: "G-YWM95JRQ51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
