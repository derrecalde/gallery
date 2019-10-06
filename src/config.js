import * as firebase from "firebase";

// Add the Firebase services that you want to use
import "firebase/firestore";


 let config = {
  apiKey: "***",
  authDomain: "***",
  databaseURL: "***",
  projectId: "***",
  storageBucket: "***"    
};
let app = firebase.initializeApp(config);

export const db = app.firestore()
// export const db = app.database()
