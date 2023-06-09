const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signIn = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    // port : 3306,
    user: '',
    password: '',
    database: 'smart-brain'
  }
});

// db.select('*').from('users').then(data => {
//   console.log(data);
// });

const app = express();

app.use(bodyParser.json());
app.use(cors());

// const database = {
//   users: [{
//       id: '123',
//       name: 'John',
//       email: 'john@gmail.com',
//       password: 'cookies',
//       entries: 0,
//       joined: new Date()
//     },
//     {
//       id: '124',
//       name: 'Sally',
//       email: 'sally@gmail.com',
//       password: 'bananas',
//       entries: 0,
//       joined: new Date()
//     }
//   ],
//   login: [{
//     id: '987',
//     hash: '',
//     email: 'john@gmail.com'
//   }]
// }

app.get('/', (req, res) => {
  // res.send(database.users);
  db.select('*').from('users').then(data => {
  console.log(data);
});
})

// 1) one way below
app.post('/signin', signIn.handleSignIn(db, bcrypt))
// 2) another 'easier' way below
// app.post('/signin', (req, res) => { signIn.handleSignIn(req, res, db, bcrypt)} )
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)} )
// database.users.forEach(user => {
//   if (user.id === id) {
//     found = true;
//     return res.json(user);
//   }
// })
// if (!found) {
//   res.status(400).json('user not found');
// }
app.put('/image', (req, res) => { image.handleImage(req, res, db)} )

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3000, () => {
  console.log('app is running on port 3000');
})