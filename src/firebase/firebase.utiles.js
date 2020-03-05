import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAG198l47vfmE_LjsCnajpoh_T14NQlRtY",
  authDomain: "lnv-clothing.firebaseapp.com",
  databaseURL: "https://lnv-clothing.firebaseio.com",
  projectId: "lnv-clothing",
  storageBucket: "lnv-clothing.appspot.com",
  messagingSenderId: "228295161850",
  appId: "1:228295161850:web:4183307731e88891b3d643",
  measurementId: "G-LJCLKWWVY0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
