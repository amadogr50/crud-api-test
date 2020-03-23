const express = require('express')
const router = express.Router()

const User = require('../models/user')
const ROLES = require('../models/user')
const generateHash = require('../models/user')

router.get('/users', async (req, res) => {
  let roles = req.body.roles
  if (!roles) {
    roles = ROLES
  }

  let page = Math.max(0, req.body.page)
  let perPage = Math.max(10, req.body.perPage)

  const count = await User.count()

  const users = await User.find({
    role: {$in: roles}
  })
    .limit(perPage)
    .skip(perPage * page)

  await res.json({
    users: users,
    page: page,
    pages: Math.ceil(count / perPage)
  })
})

router.get('/users/:id', async (req, res) => {
  const {id} = req.params

  const user = await User.findById(id)
  res.send(user)
})

router.put('/users/:id', async (req, res) => {
  const {id} = req.params
  const user = User.findById(id)

  if (user) {
    const {nick, name, lastName, role, email} = req.body
    await user.update({nick, name, lastName, role, email})
    res.status(200).end()
  } else {
    res.status(404).end()
  }
})

router.delete('/users/:id', async (req, res) => {
  const {id} = req.params
  const user = User.findById(id)

  if (user) {
    await User.remove({_id: id})
    res.status(200).end()
  } else {
    res.status(404).end()
  }
})

router.post('/users', async (req, res) => {
  const user = new User(req.body)
  user.password = user.generateHash(user.password)
  await user.save((error) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).send({id: user._id})
    }
  })
})


module.exports = router