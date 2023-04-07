import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  writeBatch,
  setDoc,
  query,
  getDocs
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4F3VKBIWUemKweAAtGZKQHEtLsgOFvQo",
  authDomain: "shopify-d295f.firebaseapp.com",
  projectId: "shopify-d295f",
  storageBucket: "shopify-d295f.appspot.com",
  messagingSenderId: "81040893511",
  appId: "1:81040893511:web:6cdabb38b78506c58af362"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit();
  console.log("Done")
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q)
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const {title, items} = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc
  }, {});

  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {displayName: "mike"} ) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  const usersnapshot = await getDoc(userDocRef);
  console.log(usersnapshot.exists())

  if(!usersnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }catch(err) {
      console.log('error creating the user', err.message)
    }

  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>  {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) =>  {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)