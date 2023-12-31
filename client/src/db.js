// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

// // import Filter from 'bad-words'
// import { ref, onUnmounted, computed } from 'vue'

// firebase.initializeApp({
//     apiKey: "AIzaSyAoLbODVTgb143h19A0lx5gxuh5p0jwrD0",
//     authDomain: "socialbond.firebaseapp.com",
//     databaseURL: "https://socialbond-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "socialbond",
//     storageBucket: "socialbond.appspot.com",
//     messagingSenderId: "25784665411",
//     appId: "1:25784665411:web:19a857092bf1e321d0dbf6"
// })
// const auth = firebase.auth()

// export function useAuth() {
//   const user = ref(null)
//   const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
//   onUnmounted(unsubscribe)
//   const isLogin = computed(() => user.value !== null)

//   const signIn = async () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider()
//     await auth.signInWithPopup(googleProvider)
//   }
//   const signOut = () => auth.signOut()

//   return { user, isLogin, signIn, signOut }
// }

// const firestore = firebase.firestore()
// const messagesCollection = firestore.collection('messages')
// const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)
// // const filter = new Filter()

// export function useChat() {
//   const messages = ref([])
//   const unsubscribe = messagesQuery.onSnapshot(snapshot => {
//     messages.value = snapshot.docs
//       .map(doc => ({ id: doc.id, ...doc.data() }))
//       .reverse()
//   })
//   onUnmounted(unsubscribe)

//   const { user, isLogin } = useAuth()
//   const sendMessage = text => {
//     if (!isLogin.value) return
//     const { photoURL, uid, displayName } = user.value
//     messagesCollection.add({
//       userName: displayName,
//       userId: uid,
//       userPhotoURL: photoURL,
//     //   text: filter.clean(text),
//       createdAt: firebase.firestore.FieldValue.serverTimestamp()
//     })
//   }

//   return { messages, sendMessage }
// }
// const db = firebase.initializeApp(config);
// export default db;

import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyAoLbODVTgb143h19A0lx5gxuh5p0jwrD0",
    authDomain: "socialbond.firebaseapp.com",
    databaseURL: "https://socialbond-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "socialbond",
    storageBucket: "socialbond.appspot.com",
    messagingSenderId: "25784665411",
    appId: "1:25784665411:web:19a857092bf1e321d0dbf6"
}

const db = firebase.initializeApp(config);
export default db;