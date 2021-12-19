// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
//import { getFirestore } from 'firebase/firestore'
//import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAugAg3N5rgFtJhIObd4TRijMkOqgGwy5A',
  authDomain: 'crwn-db-hdev.firebaseapp.com',
  projectId: 'crwn-db-hdev',
  storageBucket: 'crwn-db-hdev.appspot.com',
  messagingSenderId: '208695151873',
  appId: '1:208695151873:web:010f34a92e840194a41f00',
  measurementId: 'G-G4XNLR905Q',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// console.log('firebase initialized')
// export const db = getFirestore(app)
//const analytics = getAnalytics(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
const auth = getAuth()
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
