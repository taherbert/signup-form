const functions = require('firebase-functions')
const cors = require('cors')
var validator = require('validator')

// This is a very simple, naieve, and insecure API endpoint for demonstration purposes only.
// Validates a received email address and responds accordingly.
exports.validateEmail = functions.https.onRequest((request, response) => {
  return cors()(request, response, () => {
    const { email } = request.body
    const isValidEmail = validator.isEmail(email)
    if (!isValidEmail) {
      // Simulate a server error to demonstrate retries
      return response.status(422).send({ message: 'Invalid email' })
    }
    return response.status(200).send({ message: 'Success' })
  })
})
