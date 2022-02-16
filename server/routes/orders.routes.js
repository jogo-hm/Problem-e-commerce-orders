const { Router } = require('express');
const router = Router();
const { orders, detail } = require('../controllers/orders.controller')

router.get('', orders);
router.get('/detail/:id', detail)

module.exports = router;