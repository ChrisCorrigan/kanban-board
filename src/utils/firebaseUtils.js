import { app, db, auth } from "../firebase.config";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
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

    // After the board is created, create 4 default lists, each with a default card
    // the lists will be named "To Do", "In Progress", "Testing", and "Done"
    const listNames = ["To Do", "In Progress", "Testing", "Done"];

    for (const name of listNames) {
      const listId = await createList({
        title: name,
        boardId: docRef.id,
      });

      // After the list is created, create a default card for the list
      await createCard({
        title: "Enter a title for this card...",
        listId,
      }); 
    }

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
    const docRef = await addDoc(collection(db, "lists"), listData);
    return docRef.id;
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

export const getList = async (id) => {
  const docRef = doc(db, "lists", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("No list found with the given id");
  }

  return { id: docSnap.id, ...docSnap.data() };
};

export const createCard = async (cardData) => {
  // Add a new card with a generated ID
  try {
    await addDoc(collection(db, "cards"), cardData);
  } catch (error) {
    console.error("Error creating card: ", error);
  }
};

export const getCards = async (listId) => {
  const q = query(collection(db, "cards"), where("listId", "==", listId));
  const querySnapshot = await getDocs(q);
  const cards = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return cards;
};

export const getCard = async (id) => {
  const docRef = doc(db, "cards", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("No card found with the given id");
  }

  return { id: docSnap.id, ...docSnap.data() };
};

export const updateCard = async (id, cardData) => {
  const docRef = doc(db, "cards", id);
  await updateDoc(docRef, cardData);
};

export const addCardToList = async (listId, cardData) => {
  const cardRef = await addDoc(collection(db, "cards"), {
    ...cardData,
    listId,
  });

  return cardRef;
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
