const bcrypt = require("bcryptjs");
const db = require("../sqlConnect");

const userCtrl = {
  register: async (req, res) => {
    try {
      const {
        f_name,
        m_name,
        l_name,
        c_email,
        c_password,
        c_city,
        c_house,
        c_phone,
      } = req.body;

      if (!validateEmail(c_email))
        return res.status(400).json({ msg: "Invalid email." });

      if (c_phone.length < 10)
        return res.status(400).json({ msg: "Invalid phone no." });

      if (c_password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 8 characters." });

      const hashedPassword = await bcrypt.hash(c_password, 12);
      const newUser = {
        f_name,
        m_name,
        l_name,
        c_email,
        c_password: hashedPassword,
        c_city,
        c_house,
        c_phone,
      };

      db.query("INSERT INTO customer SET ?", newUser, (err, result) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        }
        return res.status(200).json({ msg: "User registered successfully!" });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login:  async (req, res) => {
    try {
      const { c_email, c_password } = req.body;
      if (!validateEmail(c_email))
        return res.status(400).json({ msg: "Invalid email" });

      await db.query("SELECT * FROM customer WHERE c_email = ?",[c_email], async (err, result) => {
          if (err) throw err;
          if (result.length > 0) {
            const isMatch = await bcrypt.compare(c_password, result[0].c_password);
            if (!isMatch)
              return res.status(400).json({ msg: "Invalid password", result });
            delete result[0]["c_password"];
            return res.status(200).json({ msg: "Login successful",result });
          } else {
            return res.status(400).json({ msg: "Invalid email" });                                                
          }
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = userCtrl;                                                                                              

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
