import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnTzh1XTlOBjH5LaSYc8RSwY307v_qr5M",
    authDomain: "employee-manager-sec01.firebaseapp.com",
    projectId: "employee-manager-sec01",
    storageBucket: "employee-manager-sec01.appspot.com",
    messagingSenderId: "433583703112",
    appId: "1:433583703112:web:e8b487e675eff3ead3847d",
    measurementId: "G-PHE7VWG09E"
  };

const firebaseApp = firebase.initialzeApp(firebaseConfig)

export default firebaseApp;