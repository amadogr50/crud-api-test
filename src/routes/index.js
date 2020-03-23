const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', async (req, res) => {
  const users = await User.find()
  res.render('index', {
    users: users
  })
})

module.exports = router