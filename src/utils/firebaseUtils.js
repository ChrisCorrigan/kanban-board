import { app, db, auth } from "../firebase.config";
import { collection, doc, addDoc, getDocs, getDoc } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const createBoard = async (boardData) => {
  // Add a new board with a generated ID
  try {
    const docRef = await addDoc(collection(db, "boards"), boardData);
    // After the board is created, create a default list for the board
    await createList({ title: "List Title", boardId: docRef.id });
    return docRef.id;
  } catch (error) {
    console.error("Error creating board: ", error);
  }
};

export const getBoards = async () => {
  const querySnapshot = await getDocs(collection(db, "boards"));
  const boards = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(boards);
  return boards;
};

export const getBoard = async (id) => {
  const docRef = doc(db, "boards", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("No board found with the given id");
  }

  return { id: docSnap.id, ...docSnap.data() };
};

export const createList = async (listData) => {
  // Add a new list with a generated ID
  try {
    await addDoc(collection(db, "lists"), listData);
  } catch (error) {
    console.error("Error creating list: ", error);
  }
};

export const getLists = async (boardId) => {
  const q = query(collection(db, "lists"), where("boardId", "==", boardId));
  const querySnapshot = await getDocs(q);
  const lists = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return lists;
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
