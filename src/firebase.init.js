// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9BkYNyx84tLGSgsBqCnF5NRmQoeVoyYE",
  authDomain: "book-collection-7e8d5.firebaseapp.com",
  projectId: "book-collection-7e8d5",
  storageBucket: "book-collection-7e8d5.appspot.com",
  messagingSenderId: "183365998008",
  appId: "1:183365998008:web:97931b4e73b12ac97dab4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;