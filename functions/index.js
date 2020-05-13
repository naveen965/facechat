const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();

admin.initializeApp();

const firebaseConfig = {
    apiKey: "AIzaSyCxwIMJVZw9vlVSiBWroW2ZSu_lqemoLFg",
    authDomain: "socialape-48ee7.firebaseapp.com",
    databaseURL: "https://socialape-48ee7.firebaseio.com",
    projectId: "socialape-48ee7",
    storageBucket: "socialape-48ee7.appspot.com",
    messagingSenderId: "527780846820",
    appId: "1:527780846820:web:6868a14b4246e9610ca0f1",
    measurementId: "G-05BR1KS82F"
  };


const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

app.get('/screams', (req, res) => {
    admin.firestore().collection('screams').orderBy('createdAt', 'desc').get()
        .then(data => {
            let screams = [];
            data.forEach (doc => {
                screams.push({
                    screamId: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data().userHandle,
                    createdAt: doc.data().createdAt
                });
            });
            return res.status(200).json(screams);
        })
        .catch(err => console.error(err));
});

app.post('/scream', (req, res) => {
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: new Date().toISOString()
    };

    admin.firestore().collection('screams').add(newScream)
        .then((doc) => {
            res.status(200).json({ message: `document ${doc.id} created successfully` });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Something went wrong' });
            console.error(err);
        });
});

app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confiremPassword: req.body.confiremPassword,
        handle: req.body.handle,
    };

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
            return res.status(201).json({ message: `user ${data.user.uid} signed up successfully` });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        });
});

exports.api = functions.region('us-central1').https.onRequest(app);