// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY5zD7EGyFIeNmyE_LXBWlHg7IuotijS0",
  authDomain: "netflixgpt-d414a.firebaseapp.com",
  projectId: "netflixgpt-d414a",
  storageBucket: "netflixgpt-d414a.firebasestorage.app",
  messagingSenderId: "564363309352",
  appId: "1:564363309352:web:4929e14bda53e7e74b201d",
  measurementId: "G-QVZ71DL9WS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
