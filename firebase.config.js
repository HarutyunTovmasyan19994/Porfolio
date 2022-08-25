// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAblfqEv97ZY2SNQB8bP7EVQD3F-q0SbA",
    authDomain: "my-portfolio-f3988.firebaseapp.com",
    projectId: "my-portfolio-f3988",
    storageBucket: "my-portfolio-f3988.appspot.com",
    messagingSenderId: "45311063178",
    appId: "1:45311063178:web:6c5c396642779bbe802973",
    measurementId: "G-GG6WH3W5V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
