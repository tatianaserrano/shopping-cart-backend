const { Router } = require('express');
const { getProducts } = require('../controllers/products');

const router = Router();

router.get('/products', getProducts)

exports.router = router;