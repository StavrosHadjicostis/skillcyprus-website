import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGKBVwIF4BSqsxzHzhaVjdXAGNG2wShpI",
    authDomain: "skillscyprus-24ccf.firebaseapp.com",
    projectId: "skillscyprus-24ccf",
    storageBucket: "skillscyprus-24ccf.firebasestorage.app",
    messagingSenderId: "331801842174",
    appId: "1:331801842174:web:b0addc50b7beb9520ab0af",
    measurementId: "G-VZVEKNW7QJ"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
