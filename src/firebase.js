import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKa7gjDqi7y5MW52JLw1M2GZnLI4XVmzE",
    authDomain: "facebook-clone-48499.firebaseapp.com",
    projectId: "facebook-clone-48499",
    storageBucket: "facebook-clone-48499.appspot.com",
    messagingSenderId: "771601264048",
    appId: "1:771601264048:web:7a03eba1c48be30f763a75",
    measurementId: "G-TY5FJZPVJV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
