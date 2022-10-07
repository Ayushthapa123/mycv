
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,doc,addDoc,updateDoc, query, where} from 'firebase/firestore';

import { getDatabase, ref, onValue} from "firebase/database";
import {getStorage, uploadBytes, uploadBytesResumable, getDownloadURL,ref as sRef} from 'firebase/storage'


// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getStorage } from "firebase/storage";




const firebaseConfig = {

  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  //...
};

const app = initializeApp(firebaseConfig);


 export const db = getFirestore(app);

// export const auth = getAuth();

export const storage = getStorage(app);

export {doc,getDocs,getDatabase,ref,sRef,
  onValue,getFirestore,collection,getStorage, 
  uploadBytes,addDoc,updateDoc,uploadBytesResumable, 
  getDownloadURL,query,where}

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
