const express = require('express');
const router = express.Router();
const controller = require('./controller');


/* GET home page. */
router.post('/auth/signin', controller.signIn);
router.post('/auth/signup', controller.signUp);


module.exports = router;
