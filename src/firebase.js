import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNCn6Et1IIDqjdODlgKWCKIVZOaWO0YsQ",
    authDomain: "linkedin-clone-b505a.firebaseapp.com",
    projectId: "linkedin-clone-b505a",
    storageBucket: "linkedin-clone-b505a.appspot.com",
    messagingSenderId: "33619182303",
    appId: "1:33619182303:web:f8c26d9cc3bf841d5b1f6a",
    measurementId: "G-WNCVDDE9RD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;  