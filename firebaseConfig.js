// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEM0i64PAb-VLLLsAdl8wfzAnPxMlIr6c",
  authDomain: "animestoreproject-e3014.firebaseapp.com",
  projectId: "animestoreproject-e3014",
  storageBucket: "animestoreproject-e3014.appspot.com",
  messagingSenderId: "583720763212",
  appId: "1:583720763212:web:ec655e954728843525d9e9",
  measurementId: "G-WTL605CDVB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
