import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC6yrkCIbEnxVgJWZeVGJTfQO_kjcah2es",
  authDomain: "welcome-to-vstar.firebaseapp.com",
  databaseURL: "https://welcome-to-vstar.firebaseio.com",
  projectId: "welcome-to-vstar",
  storageBucket: "",
  messagingSenderId: "1090229555825",
  appId: "1:1090229555825:web:9ac159cd87af4d962741d0",
  measurementId: "G-9P6D91271V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const database = firebaseApp.database();
export const auth = firebaseApp.auth();
