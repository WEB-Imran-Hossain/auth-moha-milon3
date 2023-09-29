// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARu43L-7swH2QPxMrg3Kbh2fApnNx2_fQ",
  authDomain: "auth-moha-milon-8f744.firebaseapp.com",
  projectId: "auth-moha-milon-8f744",
  storageBucket: "auth-moha-milon-8f744.appspot.com",
  messagingSenderId: "450159363695",
  appId: "1:450159363695:web:0ed309733691e2de60af9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
