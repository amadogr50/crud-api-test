const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  nick: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^((?!\d)\w)((?!_)\w)*$/.test(value)
      }
    }
  },
  name: {
    type: String,
    required: true
  },
  lastName: String,
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Operador', 'Administrativo']
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      }
    }
  }
})

module.exports = mongoose.model('users', userSchema)