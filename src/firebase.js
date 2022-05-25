import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAuijQmE4YdilofdtYj83sxjWtpJLOTE7U",
    authDomain: "disney-plus-226a6.firebaseapp.com",
    projectId: "disney-plus-226a6",
    storageBucket: "disney-plus-226a6.appspot.com",
    messagingSenderId: "369853807636",
    appId: "1:369853807636:web:eba102158404876a25bb01",
    measurementId: "G-5H78NGMNR4"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;