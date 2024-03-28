// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDD6fEOtZP_QoI9oe5Tfd4HQXattHCAY_8",
  authDomain: "netflix-project-7aa00.firebaseapp.com",
  projectId: "netflix-project-7aa00",
  storageBucket: "netflix-project-7aa00.appspot.com",
  messagingSenderId: "579083701262",
  appId: "1:579083701262:web:17adf2721e10986da5c05f",
  measurementId: "G-QLL0Z70MEH"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
