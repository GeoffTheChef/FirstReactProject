// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwiJj3pWkCNYu12rN_zL56m2u_c1Z4V0o",
  authDomain: "my-first-react-project-57b7e.firebaseapp.com",
  databaseURL: "https://my-first-react-project-57b7e-default-rtdb.firebaseio.com",
  projectId: "my-first-react-project-57b7e",
  storageBucket: "my-first-react-project-57b7e.appspot.com",
  messagingSenderId: "322025203291",
  appId: "1:322025203291:web:541b8b6bc0ff0a3334417e",
  measurementId: "G-CNDGBRFM9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);