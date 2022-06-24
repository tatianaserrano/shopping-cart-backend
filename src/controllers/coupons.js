const { executeQuery } = require("../services/mysql.service");

const getCoupons = async (req, res) => {
  try {
    const coupons = await executeQuery("SELECT * FROM coupons");
    res.json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getCoupons,
};
