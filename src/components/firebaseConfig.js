//firebaseConfig.js
//
 
import firebase from "firebase";
 
// https://firebase.google.com/docs/web/setup?authuser=0
 
// See firebase setup in above google firebase documentation url
export const config = {
    apiKey: "AIzaSyDeNZxdzjEW87qVQMSx25a7DLnkCkzSV7A",
    authDomain: "fir-2dd4b.firebaseapp.com",
    databaseURL: "https://fir-2dd4b.firebaseio.com",
    projectId: "fir-2dd4b",
    storageBucket: "fir-2dd4b.appspot.com",
    messagingSenderId: "657612819350"
  };
 
firebase.initializeApp(config);
 
export default firebase;