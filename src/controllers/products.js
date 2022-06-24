const { executeQuery } = require("../services/mysql.service");

const getProducts = async (req, res) => {
  try {
    const products = await executeQuery("SELECT * FROM products");
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getProducts,
};
