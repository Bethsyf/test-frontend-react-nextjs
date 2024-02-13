import { firebase } from './firebaseConfiguration'

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  const response = await firebase.auth().signInWithEmailAndPassword(email, password)
  return response
}

export const logout = async () => {
  await firebase.auth().signOut()
  return
}
