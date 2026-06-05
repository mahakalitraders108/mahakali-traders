import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "mahakali-traders-d42b2.firebaseapp.com",
  projectId: "mahakali-traders-d42b2",
  storageBucket: "mahakali-traders-d42b2.firebasestorage.app",
  messagingSenderId: "572786880234",
  appId: "1:572786880234:web:41f54a129fde878350f193"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
