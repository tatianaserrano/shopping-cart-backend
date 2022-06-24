const { executeQuery } = require("../services/mysql.service")

const addPurchase = async(req, res) => {
    try{
        console.log(req.body);
        const {idCoupon, totalPurchase, totalDiscount, productsList} = req.body
        const purchaseQuery = `INSERT INTO purchases (id_coupon, total_purchase, total_discount) VALUES ('${idCoupon}', '${totalPurchase}', '${totalDiscount}')`;
        const purchase = await executeQuery(purchaseQuery)
        productsList.forEach(async product => {
            const purchasesProductsQuery = `INSERT INTO purchases_products (id_purchase, id_product, amount) VALUES ('${purchase.insertId}', '${product.id}', '${product.amount}')`
            await executeQuery(purchasesProductsQuery)
        });
        res.json({message: 'added'})
    }catch(error){
        console.log(error)
        res.status(500).json({message: error})
    }
}

module.exports = {
    addPurchase
}