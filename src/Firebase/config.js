import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNM51ZFIwyOr9TrMHtYFwcyj4EyxOBTnY",
    authDomain: "demoolx-e0086.firebaseapp.com",
    projectId: "demoolx-e0086",
    storageBucket: "demoolx-e0086.appspot.com",
    messagingSenderId: "121113323419",
    appId: "1:121113323419:web:920edce9ee37a3c1ed233e",
    measurementId: "G-393R4NT9P2",
  };

 export default firebase.initializeApp(firebaseConfig)