import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgPmIc42O693bzLemDmj6QqDsT0Ubp-ns",
    authDomain: "facebook-messenger-clone-1db02.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-1db02.firebaseio.com",
    projectId: "facebook-messenger-clone-1db02",
    storageBucket: "facebook-messenger-clone-1db02.appspot.com",
    messagingSenderId: "1035589381812",
    appId: "1:1035589381812:web:5a7335639fe9ac7cd8f1e1",
    measurementId: "G-KFWK22PH56"
})

const db = firebaseApp.firestore()

export default db