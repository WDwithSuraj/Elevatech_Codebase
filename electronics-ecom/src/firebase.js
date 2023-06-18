// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA84ja5gmu2-2pCN7JGeZ1vqaOJX2Ici5Q",
    authDomain: "elevatetech-project.firebaseapp.com",
    projectId: "elevatetech-project",
    storageBucket: "elevatetech-project.appspot.com",
    messagingSenderId: "688117352233",
    appId: "1:688117352233:web:e6444404ed39c8e0c85938",
    url: "https://elevatetech-project-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);