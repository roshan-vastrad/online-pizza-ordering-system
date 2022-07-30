const express = require("express");
const cors = require("cors");
const db = require("./sqlConnect");

require("dotenv").config()

const app = express();

app.use(express.json());
app.use(cors());

db.connect((error)=>{
    if(error){
        console.log(error)
    } else{
        console.log("MSQL Connected...")
    }
})

app.get("/", (req, res) => {
  res.send("Working");
});


app.use('/user', require('./router/userRoutes'))
// app.use('/user', require('./router/menuRoutes'))
app.use('/menus', require('./router/pizzaRoutes'))
app.use('/order', require('./router/orderRoutes'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("running at port 5000");
});
