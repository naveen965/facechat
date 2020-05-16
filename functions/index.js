const functions = require('firebase-functions');

const app = require('express')();

const { getAllScreams } = require('./handlers/screams');
const { signUp, login } = require('./handlers/users');


const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

app.get('/screams', getAllScreams);

app.post('/scream', FBauth, postOneScream);

app.post('/signup', signUp);

app.post('/login', login);

const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
}

const isEmpty = (String) => {
    if (String.trim() === '') return true;
    else return false;
}

exports.api = functions.region('us-central1').https.onRequest(app);