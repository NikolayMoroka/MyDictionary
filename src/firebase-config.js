import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


    const app = initializeApp({
        apiKey: "AIzaSyDK5n0magH9Cbm0PvE52SFjrXKO5j1I_bo",
        authDomain: "mywebsite-d408e.firebaseapp.com",
        databaseURL: "https://mywebsite-d408e-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "mywebsite-d408e",
        storageBucket: "mywebsite-d408e.appspot.com",
        messagingSenderId: "673179739430",
        appId: "1:673179739430:web:d1df4de934a36d59c98de7",
        measurementId: "G-2E8D9EBSE7"
    });
  
    const db = getFirestore(app)
    const database = getDatabase(app);




export const fb = {
    app, db, database
}