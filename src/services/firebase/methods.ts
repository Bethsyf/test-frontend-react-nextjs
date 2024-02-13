import firebase from "./firebaseConfiguration";

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string,
  name?: string) => {
  const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
  return response;
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return response;
};

export const logout = async () => {
  await firebase.auth().signOut();
};