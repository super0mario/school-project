import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDsYLMHP6KJw7RykbT9-WJyu2jQS-iARXI",
    authDomain: "school-project-3b636.firebaseapp.com",
    databaseURL: "https://school-project-3b636.firebaseio.com",
    projectId: "school-project-3b636",
    storageBucket: "school-project-3b636.appspot.com",
    messagingSenderId: "72110042603"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const storageRef = firebase.storage().ref();
