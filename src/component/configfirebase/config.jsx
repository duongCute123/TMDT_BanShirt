// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyHh6j7KsrFWXOhBQ9nW1qroznccLdpFg",
    authDomain: "reactjs-207e4.firebaseapp.com",
    projectId: "reactjs-207e4",
    storageBucket: "reactjs-207e4.appspot.com",
    messagingSenderId: "805800211091",
    appId: "1:805800211091:web:8317c89d6ac31ffdf65366",
    measurementId: "G-8X8V1K2SFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);