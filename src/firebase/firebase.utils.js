// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAugAg3N5rgFtJhIObd4TRijMkOqgGwy5A',
  authDomain: 'crwn-db-hdev.firebaseapp.com',
  projectId: 'crwn-db-hdev',
  storageBucket: 'crwn-db-hdev.appspot.com',
  messagingSenderId: '208695151873',
  appId: '1:208695151873:web:010f34a92e840194a41f00',
  measurementId: 'G-G4XNLR905Q',
}

export const app = initializeApp(firebaseConfig)

const db = getFirestore()

// Checks Google user and persists in firesbase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const docRef = doc(db, `users/${userAuth.uid}`)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(docRef, { displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return docRef
}

// Popup GoogleOauth Signin
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const auth = getAuth()

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
