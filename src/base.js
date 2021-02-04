import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA68Qq1ReDtYojdlOH7al3H28LoDYNLMxQ",
  authDomain: "very-hot-burgers-6e50e.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-6e50e-default-rtdb.firebaseio.com",
  projectId: "very-hot-burgers-6e50e",
  storageBucket: "very-hot-burgers-6e50e.appspot.com",
  messagingSenderId: "500451165778",
  appId: "1:500451165778:web:e697535b4ed1ca4b41c18b"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;