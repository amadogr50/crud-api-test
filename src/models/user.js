const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const ROLES = ['Admin', 'Operador', 'Administrativo']

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
    enum: ROLES
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

const generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
userSchema.methods.generateHash = generateHash

const validPassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};
userSchema.methods.validPassword = validPassword

module.exports = mongoose.model('users', userSchema)
module.exports.ROLES = ROLES
module.exports.generateHash = generateHash
module.exports.validPassword = validPassword