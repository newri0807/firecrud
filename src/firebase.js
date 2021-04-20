// firebase 연결하기!
import firebase from "firebase";

// 1. initialize
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWcGH4UY5BGJGxjgonrmnMzxJJygsP_3k",
  authDomain: "reactcrud-58176.firebaseapp.com",
  databaseURL: "https://reactcrud-58176-default-rtdb.firebaseio.com",
  projectId: "reactcrud-58176",
  storageBucket: "reactcrud-58176.appspot.com",
  messagingSenderId: "207498026599",
  appId: "1:207498026599:web:038e2d3265817a67553ec2",
  measurementId: "G-1J4HWFC2F0"
});

const db = firebaseApp.firestore();

export default db;
