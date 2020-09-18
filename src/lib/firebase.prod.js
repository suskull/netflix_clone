import Firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'

//config
const config = {
    apiKey: "AIzaSyCsrd-4WqXVoEpt7e184kxZD3WAB-ZLtW4",
    authDomain: "netflixclone-3860d.firebaseapp.com",
    databaseURL: "https://netflixclone-3860d.firebaseio.com",
    projectId: "netflixclone-3860d",
    storageBucket: "netflixclone-3860d.appspot.com",
    messagingSenderId: "403048683319",
    appId: "1:403048683319:web:8ddcf12da21e0055c8ecb2",
    measurementId: "G-Q7CGB6FTRS"
}

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export {firebase};