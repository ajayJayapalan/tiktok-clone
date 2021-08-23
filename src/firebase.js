import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA990Sgs_hG6hy82lU_u9Lbc67JLVmFiWE",
  authDomain: "tiktok-clone-7e152.firebaseapp.com",
  projectId: "tiktok-clone-7e152",
  storageBucket: "tiktok-clone-7e152.appspot.com",
  messagingSenderId: "544561120968",
  appId: "1:544561120968:web:8868f972746ad164bc47fd",
  measurementId: "G-7LRCWHLZ33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
