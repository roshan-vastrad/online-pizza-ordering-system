import React from "react";

export const OrderCard = ({ orderData, i }) => {
  return (
    <>
      <div className="order_card">
        <div id="cardss0" className="cardss">
          {i+1}
        </div>
        <div id="cardss1" className="cardss">
          {orderData.pizza_name}
        </div>
        <div id="cardss2" className="cardss">
          {orderData.pizza_number}
        </div>
        <div id="cardss3" className="cardss">
          {orderData.pizza_price}
        </div>
        <div id="cardss4" className="cardss">
          {orderData.pizza_price * orderData.pizza_number}
        </div>
      </div>

      {/* <table>
        <tr>
          <td>{orderData.pizza_name}</td>
          <td>{orderData.pizza_number}*{orderData.pizza_price}={orderData.pizza_number*orderData.pizza_price}</td>
        </tr>
      </table> */}
    </>
  );
};
