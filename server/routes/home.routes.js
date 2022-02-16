const { Router } = require('express');
const router = Router();
const { getHome } = require('../controllers/home.controllers')

router.get('/', getHome);

module.exports = router;