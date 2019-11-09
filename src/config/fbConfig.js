 import firebase from "firebase/app";
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAK514yid9KKQPZqMIfZkduP43iZ99-yxc",
    authDomain: "vote-app-uom.firebaseapp.com",
    databaseURL: "https://vote-app-uom.firebaseio.com",
    projectId: "vote-app-uom",
    storageBucket: "vote-app-uom.appspot.com",
    messagingSenderId: "967728850894",
    appId: "1:967728850894:web:664aae302580452f03ad9f",
    measurementId: "G-FR7KZ14P1T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;