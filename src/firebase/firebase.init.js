// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkWLCjdFeO6Msr_3fXhAyHQB1zfNcPlwM",
    authDomain: "email-password-auth-f66a8.firebaseapp.com",
    projectId: "email-password-auth-f66a8",
    storageBucket: "email-password-auth-f66a8.appspot.com",
    messagingSenderId: "351281987253",
    appId: "1:351281987253:web:96589e4034cb71581e88fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;