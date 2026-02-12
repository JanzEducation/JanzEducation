// 🔥 Janz Education Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 👇 तुम्हारी Keys (Browser Version)
const firebaseConfig = {
  apiKey: "AIzaSyBj9hoeQ7H3HKsiDND4yW56x8hlwM1bsIw",
  authDomain: "janzeducation.firebaseapp.com",
  projectId: "janzeducation",
  storageBucket: "janzeducation.firebasestorage.app",
  messagingSenderId: "546165849353",
  appId: "1:546165849353:web:5ec2ba9c3309b9680467d8"
};

// Firebase Start करना
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// इसे Export करना ताकि पूरी साइट में use हो सके
export { auth, db };
