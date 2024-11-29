import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


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
const auth = getAuth(app);
// const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    console.log(user)
  if (!user) {
    // If not authenticated, redirect to login
    window.location.href = "login.html";
  }
});

// document.getElementById("logout").addEventListener("click", async () => {
//   try {
//     await auth.signOut();
//     window.location.href = "login.html"; // Redirect to login
//   } catch (error) {
//     console.error("Error logging out:", error.message);
//   }
// });