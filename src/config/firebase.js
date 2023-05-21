// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTGhl2NPMpzsOy78CFuLi-wfH1-_4VmYM",
    authDomain: "basededatos-c152a.firebaseapp.com",
    databaseURL: "https://basededatos-c152a-default-rtdb.firebaseio.com",
    projectId: "basededatos-c152a",
    storageBucket: "basededatos-c152a.appspot.com",
    messagingSenderId: "35633118758",
    appId: "1:35633118758:web:c6dbee72ea291b109eb0e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const db = getFirestore();
//export default db;
export const db = getFirestore();



