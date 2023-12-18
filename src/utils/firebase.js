// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjrO8Bgn24MBoAjFtpMmMUCXUhPpLVCbY",
  authDomain: "netflixgpt-9f976.firebaseapp.com",
  projectId: "netflixgpt-9f976",
  storageBucket: "netflixgpt-9f976.appspot.com",
  messagingSenderId: "358583523970",
  appId: "1:358583523970:web:8c64c0432d8b22a2f9b29b",
  measurementId: "G-1KJLJTNXYL"
};
// It will used to access the firebase from the react project
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
