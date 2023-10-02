const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/users')

router.get('/projects/:id', userCtrl.projects);

module.exports = router;
