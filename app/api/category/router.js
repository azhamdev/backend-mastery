const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth')


router.get('/category', auth, function (req, res) {
  res.status(200).json({
    message: 'Welcome to the category API!'
  })
});

module.exports = router;
