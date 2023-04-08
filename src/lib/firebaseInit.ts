// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA45rIJToB6CwOFYQhLQIat1-ETEHEjjvE',
	authDomain: 'it-ticketing-55e4f.firebaseapp.com',
	databaseURL: 'https://it-ticketing-55e4f-default-rtdb.firebaseio.com',
	projectId: 'it-ticketing-55e4f',
	storageBucket: 'it-ticketing-55e4f.appspot.com',
	messagingSenderId: '864388054598',
	appId: '1:864388054598:web:86fbf08f65aadbb6d3d447',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
