import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWFBGAKgb5kR-wXuuese-mCI1Nbr0ELiE",
    authDomain: "react-sample-7fbd1.firebaseapp.com",
    projectId: "react-sample-7fbd1",
    storageBucket: "react-sample-7fbd1.appspot.com",
    messagingSenderId: "895096753201",
    appId: "1:895096753201:web:58870324376e92a1261910"
});
var db = firebaseApp.firestore();

export { db };

