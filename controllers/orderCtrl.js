const db = require("../sqlConnect");

const orderCtrl = {
  order: async (req, res) => {
    try {
      const { order,customer_id } = req.body;
      const result = order.map(Object.values);
      for (let i = 0; i < result.length; i++) {
        result[i] = result[i].splice(0, 4).concat([customer_id]);
      }
      console.log(result);
      await db.query(
        "INSERT INTO orderss (pizza_id,pizza_name,pizza_price,pizza_number,customer_id) VALUES ?",
        [result],
        (err, result) => {
          if (err) throw err;
          res.status(200).json({ msg: "successful" });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  totamount: async (req, res) => {
    try {
      const {  ordertot :totalamount ,customer_id } = req.body;
      console.log(totalamount);

      await db.query(
        "INSERT INTO totals set ?",
        {customer_id,totalamount},
        (err, result) => {
          if (err) throw err;
          res.status(200).json({ msg: "successful_POOL" });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = orderCtrl;
