import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDZuc0del-xNJvBjgqPTjbUnLJHtKG0QOQ",
    authDomain: "aide-memoire-407a1.firebaseapp.com",
    databaseURL: "https://aide-memoire-407a1.firebaseio.com",
    projectId: "aide-memoire-407a1",
    storageBucket: "aide-memoire-407a1.appspot.com",
    messagingSenderId: "963617006706",
    appId: "1:963617006706:web:0ecfdc8469fc740d370eeb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();