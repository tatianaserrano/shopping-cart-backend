const { executeQuery } = require("../services/mysql.service")

const getProducts = async(req, res) => {
    const products = await executeQuery('SELECT * FROM products')
    console.log(products);
    res.json(products)
}

module.exports = {
    getProducts
}