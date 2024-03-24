// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blobby-b4e4b.firebaseapp.com",
  projectId: "blobby-b4e4b",
  storageBucket: "blobby-b4e4b.appspot.com",
  messagingSenderId: "785104987517",
  appId: "1:785104987517:web:90df2cb10504b06dab9814"
};

export const app = initializeApp(firebaseConfig);