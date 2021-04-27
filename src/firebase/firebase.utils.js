import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASH1mW4MtsI_s_GXUfoPtHcrI1P0ub9GE",
    authDomain: "crwn-db-d2347.firebaseapp.com",
    projectId: "crwn-db-d2347",
    storageBucket: "crwn-db-d2347.appspot.com",
    messagingSenderId: "392033024501",
    appId: "1:392033024501:web:88887124433d39a3b348bc",
    measurementId: "G-KVGZ26FNFW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;