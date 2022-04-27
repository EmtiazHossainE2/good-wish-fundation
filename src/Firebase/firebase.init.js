
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyA6Kq7hDqfdh3Gic1TKFxfqWkVQB7kMJMo",
//     authDomain: "good-wish-foundation.firebaseapp.com",
//     projectId: "good-wish-foundation",
//     storageBucket: "good-wish-foundation.appspot.com",
//     messagingSenderId: "387736289429",
//     appId: "1:387736289429:web:ded17f691d209fc7ad5b9c"
// };

const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;