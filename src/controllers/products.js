const { executeQuery } = require("../services/mysql.service")

const getProducts = async(req, res) => {
    const products = await executeQuery('SELECT * FROM products')
    res.json(products)
}

module.exports = {
    getProducts
}