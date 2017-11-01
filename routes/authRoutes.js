// Requiring models
const User = require('../models/User')
// Require controllers
const authControl = require('../controllers/auth')
// Requiring middleware

const reqLogin = require('../middleware/reqLogin')

module.exports = (app, passport) => {

  // Login
  app.post('/login', passport.authenticate('local-login'), authControl.login, authControl.error)

  // Logout
  app.post('/logout', authControl.logout)

  // Registration
  app.post('/register', passport.authenticate('local-signup'), authControl.register, authControl.error)
}
