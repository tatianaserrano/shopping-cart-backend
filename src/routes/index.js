const { Router } = require('express');
const { getCoupons } = require('../controllers/coupons');
const { getProducts } = require('../controllers/products');
const { addPurchase } = require('../controllers/purchases');

const router = Router();

router.get('/products', getProducts);
router.get('/coupons', getCoupons)
router.post('/purchase', addPurchase)

exports.router = router;