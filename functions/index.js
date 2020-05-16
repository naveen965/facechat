const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signUp, login } = require('./handlers/users');

app.get('/screams', getAllScreams);

app.post('/scream', FBauth, postOneScream);

app.post('/signup', signUp);

app.post('/login', login);

exports.api = functions.region('us-central1').https.onRequest(app);