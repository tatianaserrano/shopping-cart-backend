const { Router } = require('express');
const { getCoupons } = require('../controllers/coupons');
const { getProducts } = require('../controllers/products');

const router = Router();

router.get('/products', getProducts);
router.get('/coupons', getCoupons)

exports.router = router;