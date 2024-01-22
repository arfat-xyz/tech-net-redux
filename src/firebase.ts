// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPEejmuzaaqA_24oxgIpJVv5STqlgO0pM',
  authDomain: 'tech-net-1fabc.firebaseapp.com',
  projectId: 'tech-net-1fabc',
  storageBucket: 'tech-net-1fabc.appspot.com',
  messagingSenderId: '823676438172',
  appId: '1:823676438172:web:184ef90d1e91151beecf59',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
