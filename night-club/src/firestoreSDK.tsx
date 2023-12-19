import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApk9zVRpP-IAjkfkTv_DoKDMaMn8diRWE",
  authDomain: "nightclubvite.firebaseapp.com",
  projectId: "nightclubvite",
  storageBucket: "nightclubvite.appspot.com",
  messagingSenderId: "250906009545",
  appId: "1:250906009545:web:50ffa2554045db5c461218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);