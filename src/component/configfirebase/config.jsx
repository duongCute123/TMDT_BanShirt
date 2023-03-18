
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/compat/app";
const firebaseConfig = {
    apiKey: "AIzaSyDyHh6j7KsrFWXOhBQ9nW1qroznccLdpFg",
    authDomain: "reactjs-207e4.firebaseapp.com",
    projectId: "reactjs-207e4",
    storageBucket: "reactjs-207e4.appspot.com",
    messagingSenderId: "805800211091",
    appId: "1:805800211091:web:8317c89d6ac31ffdf65366",
    measurementId: "G-8X8V1K2SFF"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };