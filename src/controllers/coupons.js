const { executeQuery } = require("../services/mysql.service")

const getCoupons = async(req, res) => {
    const coupons = await executeQuery('SELECT * FROM coupons')
    res.json(coupons)
}

module.exports = {
    getCoupons
}