// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKPnHG7TKf6-bfqoRBT6bsw7DPUavZCEA",
  authDomain: "netflix-gpt-c104f.firebaseapp.com",
  projectId: "netflix-gpt-c104f",
  storageBucket: "netflix-gpt-c104f.appspot.com",
  messagingSenderId: "649315030786",
  appId: "1:649315030786:web:4512391958578a608b141b",
  measurementId: "G-8899WHEQ31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
