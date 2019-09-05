import * as firebase from "firebase";
const config={
  
    apiKey: "AIzaSyCJ5dKQkzXIYjY-LAJalr3CwBdgsgblOU0",
    authDomain: "batti-44e50.firebaseapp.com",
    databaseURL: "https://batti-44e50.firebaseio.com",
    projectId: "batti-44e50",
    storageBucket: "",
    messagingSenderId: "472704246303",
    appId: "1:472704246303:web:493459fb380a8703"
  

};  
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();