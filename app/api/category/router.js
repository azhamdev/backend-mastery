const express = require('express');
const router = express.Router();


router.get('/category', function (req, res) {
  res.status(200).json({
    message: 'Welcome to the category API!'
  })
});

module.exports = router;
