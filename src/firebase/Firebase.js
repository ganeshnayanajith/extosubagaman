import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'
import 'firebase/auth'

//const settings = {timestampsInSnapshots: true};

// const firebaseConfig = {
//   apiKey: "AIzaSyCG3gAVlmVAwQKyovaIrzigdwg81RtnINI",
//   authDomain: "subagaman-bdade.firebaseapp.com",
//   databaseURL: "https://subagaman-bdade.firebaseio.com",
//   projectId: "subagaman-bdade",
//   storageBucket: "subagaman-bdade.appspot.com",
//   messagingSenderId: "831932462193",
//   appId: "1:831932462193:web:5563796a44be5113c1d7d0"
// };


const firebaseConfig = {
  apiKey: "AIzaSyDcbeKspfyCVpbClFHAo8Jx2cH89e5SPPs",
  authDomain: "extosubagaman.firebaseapp.com",
  databaseURL: "https://extosubagaman.firebaseio.com",
  projectId: "extosubagaman",
  storageBucket: "extosubagaman.appspot.com",
  messagingSenderId: "886340190017",
  appId: "1:886340190017:web:85ed1eb1011932e7ccabc0",
  measurementId: "G-2C91LWTXEJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
