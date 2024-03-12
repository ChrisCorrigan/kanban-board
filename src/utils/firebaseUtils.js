import db from "./firebase";

export const createBoard = async (title) => {
  const boardRef = await db.collection("boards").add({ title });
  return boardRef.id;
};

export const getBoards = async () => {
  const snapshot = await db.collection("boards").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const updateBoardTitle = async (boardId, newTitle) => {
  await db.collection("boards").doc(boardId).update({ title: newTitle });
};

const deleteBoard = async (boardId) => {
  await db.collection("boards").doc(boardId).delete();
};
