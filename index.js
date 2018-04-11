const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('public'))
const path = require('path')

require('dotenv').config()

app.use(express.static(path.join(__dirname, "client", "build")))

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// cross origin things
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.options('*', cors());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/user')

// just going to create a simple mongo schema that we can use
const Schema = new mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  creditCardNumber: Number
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
  const newuser = {
    firstName,
    lastName,
    creditCardNumber
  }
  User(newUser).save((err, savedUser) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'New user successfully added!', data: savedUser })
    }
  })
})

const port = process.env.PORT || 3030;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port)