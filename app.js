// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwVZxeKs9RUzWBhg0qZCc5AMYZKHvfkJI",
  authDomain: "personal-web-8d7e9.firebaseapp.com",
  databaseURL: "https://personal-web-8d7e9-default-rtdb.firebaseio.com",
  projectId: "personal-web-8d7e9",
  storageBucket: "personal-web-8d7e9.appspot.com",
  messagingSenderId: "290435202578",
  appId: "1:290435202578:web:772809cf0b27b4091962cb",
  measurementId: "G-EN4F88XG0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);