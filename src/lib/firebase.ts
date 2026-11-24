import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsVGp3-Kdi2T8KqOEoSoTZcaGMD0D_VgI",
  authDomain: "english-932e0.firebaseapp.com",
  databaseURL: "https://english-932e0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "english-932e0",
  storageBucket: "english-932e0.firebasestorage.app",
  messagingSenderId: "202099488239",
  appId: "1:202099488239:web:185189059af26b024db21a",
  measurementId: "G-ETXRNM44XS"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
