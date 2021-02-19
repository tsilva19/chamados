import  firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyAKySIP5HtHubFm-ENo-B9K_lUVXuSR9cE",
    authDomain: "chamados-1d751.firebaseapp.com",
    databaseURL: "https://chamados-1d751.firebaseio.com",
    projectId: "chamados-1d751",
    storageBucket: "chamados-1d751.appspot.com",
    messagingSenderId: "351177186469",
    appId: "1:351177186469:web:0b75a5a1a8cd9b30fd814c"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref()