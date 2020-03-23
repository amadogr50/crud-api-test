const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/users', async (req, res) => {
  const roles = req.body.roles
  const page = Math.max(0, req.body.page)
  const perPage = Math.max(10, req.body.perPage)

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
  const { id } = req.params

})

router.put('/users/:id', async (req, res) => {

})

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params
  await User.remove({_id: id})
  res.redirect('/')
})

router.post('/users', async (req, res) => {
  const user = new User(req.body)
  await user.save((error) => {
    if (error) {
      res.send(error)
    } else {
      res.redirect('/')
    }
  })
})



module.exports = router