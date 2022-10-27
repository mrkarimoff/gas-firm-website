// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzc7Kr8q0LrIfiSbpoVdxMka-e765QR9Q",
  authDomain: "gas-website-31420.firebaseapp.com",
  projectId: "gas-website-31420",
  storageBucket: "gas-website-31420.appspot.com",
  messagingSenderId: "592122289429",
  appId: "1:592122289429:web:c73f73b7368c49bd9a1d1c",
  measurementId: "G-DE6574B8NM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
