import { db } from "./firebase.js";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const userCollection = collection(db, "users");

export const createUser = async (email, passwordHash) => {
  try {
    const docRef = await addDoc(userCollection, { email, password: passwordHash });
    return docRef.id;
  } catch (error) {
    console.error("Error creando usuario:", error);
    return null;
  }
};

export const findUserByEmail = async (email) => {
  try {
    const q = query(userCollection, where("email", "==", email));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  } catch (error) {
    console.error("Error buscando usuario:", error);
    return null;
  }
};
