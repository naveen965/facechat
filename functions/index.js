const functions = require('firebase-functions');

const app = require('express')();

const FBauth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signUp, login, uploadImage } = require('./handlers/users');

app.get('/screams', getAllScreams);
app.post('/scream', FBauth, postOneScream);
app.post('/signup', signUp);
app.post('/login', login);
app.post('/user/image', FBauth, uploadImage);

exports.api = functions.region('us-central1').https.onRequest(app);