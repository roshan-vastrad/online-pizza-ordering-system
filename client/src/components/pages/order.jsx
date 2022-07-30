import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import "../menubox/menubox.css";
import "../orderbox/orderbox.css";
import { OrderCard } from "../orderbox/common";
import { GlobalState } from "../../GlobalState";

export function Order(props) {
  //   const state = useContext(GlobalState);
  //   const [post, setPost] = state.menu;
  // const [ppg, setPpg] = useState([]);

  var ods = JSON.parse(localStorage.getItem("orderDetails"));
  var use = JSON.parse(localStorage.getItem("login_info"));
  const [filt, setFilt] = useState([]);

  const [endd, setEndd] = useState(true);

  useEffect(() => {
    const filteredUser = ods.filter((user) => user.pizza_number > 0);
    setFilt(filteredUser);
  }, []);

  var totalBilled = 0;
  for (let i = 0; i < filt.length; i++) {
    totalBilled += filt[i].pizza_price * filt[i].pizza_number;
  }

  const orderSubmit = async () => {
    // console.log(use)
    const res = await axios.post("http://localhost:5000/order/", {
      order: filt,
      customer_id: use[0].customer_id,
    });
    const ress = await axios.post("http://localhost:5000/order/totamount", {
      customer_id: use[0].customer_id,
      ordertot: totalBilled,
    });
    console.log(ress);
    if (res.status === 200 && ress.status === 200) {
      setEndd((prev) => !prev);
      var element = document.getElementById("containerr1");
      element.classList.add("containerrX");
      var elements = document.getElementById("order_container");
      elements.classList.add("order_containerX");
      const box = document.getElementById("containerr1");
      box.removeAttribute("id");
      const boxs = document.getElementById("order_container");
      boxs.removeAttribute("id");
      console.log("Successess");
    }
  };

  return (
    <>
      <div className="navigation">
        <div className="navigation_1">
          <img src="./images/p8.png" width="100px" height="70px" alt="j" />
        </div>
        <div className="n2">
          <div id="yesirr">Cool</div>
          <img src="./images/p7.png" width="60px" height="50px" alt="j" />
          <div id="yesirr">Pizza</div>
        </div>
      </div>
      <div id="containerr1">
        <div id="order_container">
          {endd === true ? (
            <>
              {" "}
              <div className="otitle">Order Details</div>
              <div className="order_card">
                <div className="cardss20">Number</div>
                <div className="cardss20">Pizza_Name</div>
                <div className="cardss20">Number_of_items</div>
                <div className="cardss20">Price</div>
                <div className="cardss20">Total_Price</div>
              </div>
              <div className="order_holder">
                {filt.map((user, index) => (
                  <OrderCard orderData={user} key={index} i={index} />
                ))}
              </div>
              <button className="total_container" onClick={orderSubmit}>
                <div className="total ttl">Pay Bill: </div>
                <div className="amount ttl">₹{totalBilled}</div>
              </button>
            </>
          ) : (
            <div>
              <div id="end_text">
                <u>Thank You</u>
              </div>
              <div id="end_text2">for using our services</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
