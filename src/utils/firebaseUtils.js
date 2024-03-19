import { app, db, auth } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const createBoard = async (boardData) => {
  // Add a new board with a generated ID
  const docRef = await addDoc(collection(db, "boards"), boardData);
  return docRef.id;
};

export const getBoards = async () => {
  const querySnapshot = await db.collection("boards").get();
  const boards = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return boards;
};

export const deleteBoard = async (boardId) => {
  await db.collection("boards").doc(boardId).delete();
};

// Authentication-related functions
export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};

export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};

// export const passwordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const changePassword = (password) => {
//   return updatePassword(auth.currentUser, password);
// };

// export const verifyEmail = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });
// };
