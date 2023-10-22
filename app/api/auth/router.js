const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/auth', function (req, res) {
  res.status(200).json({
    message: 'Welcome to the authentication API!'
  })
});

module.exports = router;