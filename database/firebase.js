import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDVu5URiapEhO3A_hJ4yoOBBH0ID5-OWmM",
    authDomain: "cosmic-selector.firebaseapp.com",
    projectId: "cosmic-selector",
    storageBucket: "cosmic-selector.appspot.com",
    messagingSenderId: "1029573193168",
    appId: "1:1029573193168:web:de03e375d257811692ddd5",
    measurementId: "G-E1GGLHP2CJ"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db =firebase.firestore()

export default {
    firebase,
    db
}