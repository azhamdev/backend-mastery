const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth')
const { getAllCategories, createCategories, updateCategories, deleteCategories } = require('./controller')


router.get('/category', auth, getAllCategories);
router.post('/category', auth, createCategories);
router.put('/category/:id', auth, updateCategories);
router.delete('/category/:id', auth, deleteCategories);

module.exports = router;
