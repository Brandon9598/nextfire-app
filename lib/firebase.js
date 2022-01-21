import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBd-rcCLkdNOmxC80822wbY2xmtpxkv4y0",
	authDomain: "nextfire-app-9498d.firebaseapp.com",
	projectId: "nextfire-app-9498d",
	storageBucket: "nextfire-app-9498d.appspot.com",
	messagingSenderId: "1046146153905",
	appId: "1:1046146153905:web:8c40827a4dcb7818d41190",
	measurementId: "G-8CSF5E1BH1",
};

if (!firebase.app.lengths) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
