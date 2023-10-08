const {getAll} = require('../controllers/user')
const express = require('express');

const router = express.Router();

router.get('/user', getAll);

module.exports = router
