import firebase from 'firebase/app';
import "@firebase/firestore";



// Your web app's Firebase configuration
const app = firebase.initializeApp ({
    apiKey: "AIzaSyDCDVBaSp_B2UvedFvLLRhx81bg8KdRe_I",
    authDomain: "red-panda-dca19.firebaseapp.com",
    projectId: "red-panda-dca19",
    storageBucket: "red-panda-dca19.appspot.com",
    messagingSenderId: "833890112094",
    appId: "1:833890112094:web:6fa8c6b9492b132a325acf"
  });
  // Initialize Firebase


  export const getFirebase = () => {
      return app; 
  }

  export const getFirestore = () =>{
      return firebase.firestore(app);
  }