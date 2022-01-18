import React from "react";

import "./index.css";

import TransactionList from "./Component/transtion list";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCGdVPvtrL9mh5FxQBkyl9nycLom7oG1w",
  authDomain: "crud-g-2.firebaseapp.com",
  projectId: "crud-g-2",
  storageBucket: "crud-g-2.appspot.com",
  messagingSenderId: "975574365491",
  appId: "1:975574365491:web:932515ccf0398e1d88fa46"
};

// Initialize Firebase
 initializeApp(firebaseConfig);




function App() {
  return <TransactionList />;
}

export default App;
