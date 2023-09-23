const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/users')

router.get('/me', userCtrl.me);

module.exports = router;
