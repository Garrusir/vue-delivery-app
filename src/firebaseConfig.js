import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDYOnxSMCRrz2NGgOdVBLOQxo5IX4WzjiU",
  authDomain: "vue-delivery-app.firebaseapp.com",
  databaseURL: "https://vue-delivery-app.firebaseio.com",
  projectId: "vue-delivery-app",
  storageBucket: "vue-delivery-app.appspot.com",
  messagingSenderId: "177693947670",
  appId: "1:177693947670:web:e7efa6dc803a74ec9d4237",
  measurementId: "G-NE9V9QQB83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}