const express = require('express')
const router = express.Router()
const app = express()
app.use(express.static('public'))
const path = require('path')

require('dotenv').config()

app.use(express.static(path.join(__dirname, "client", "build")))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const jsonParser = bodyParser.json()

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/user_db')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/user')

// just going to create a simple mongo schema that we can use
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  creditCardNumber: String
})

const User = mongoose.model('user', userSchema)

// get request for all users
app.get('/api/users', (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'Successfully got your users!', data: users })
    }
  })
})

// post route to insert a new user
app.post('/api/user', (req, res) => {
  const {firstName, lastName, creditCardNumber} = req.body
  const newUser = {
    firstName,
    lastName,
    creditCardNumber
  }

  User(newUser).save((err, savedUser) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'user successfully added', data: savedUser })
    }
  })
})

const port = process.env.PORT || 3030;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port)