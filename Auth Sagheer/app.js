import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPstJoMCpmYoEsA0g4IGh0mBuVswoh7b0",
    authDomain: "userdata--authenctication.firebaseapp.com",
    projectId: "userdata--authenctication",
    storageBucket: "userdata--authenctication.appspot.com",
    messagingSenderId: "679471008591",
    appId: "1:679471008591:web:46366faceeb3c10a1d533a"
  };


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

let email = document.querySelector("#getemail")
let pass = document.querySelector("#getpassword")
let btn = document.querySelector("#btn")

