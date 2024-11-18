// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYIiDFh3oCeotUrdJ3l_OhbFpFlGBZWug",
  authDomain: "firenext-b5d52.firebaseapp.com",
  projectId: "firenext-b5d52",
  storageBucket: "firenext-b5d52.firebasestorage.app",
  messagingSenderId: "969817221768",
  appId: "1:969817221768:web:d757d39daee6e45b014d3d",
};

// Initialize Firebase
const currentApps = getApps();

let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
