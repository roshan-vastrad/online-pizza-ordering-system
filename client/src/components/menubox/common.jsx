import React, { memo } from "react";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { onlyUpdateForKeys } from "recompose";

export const Card = ({
  userData,
  increment,
  decrement,
  regular,
  medium,
  large,
  i,
  descr,
}) => {
  const usd = userData.pizza_number;
  const [inc, setInc] = useState(usd);

  var ssd = userData.pizza_price;
  const [snc, setSnc] = useState(ssd);

  const [toggle, setToggle] = useState(false);

  const incrementtt = () => {
    if (inc >= 0) {
      setInc((x) => x + 1);
    }
  };
  const decrementtt = () => {
    if (inc > 0) {
      setInc((y) => y - 1);
    }
  };

  const regularr = () => {
    setSnc(ssd * userData.pizza_size);
  };
  const mediumm = () => {
    setSnc(ssd * userData.pizza_size);
  };
  const largee = () => {
    setSnc(ssd * userData.pizza_size);
  };
  // const [pnum, setPnum] = useState(userData.pizza_number);

  var spin = keyframes`
  0% { background-size: 80px 165px; }
  100% { background-size: 290px 165px; }
`;

  const Card_img = onlyUpdateForKeys([])(styled.div`
    top: 15px;
    left: -39px;
    margin: 10px 0 10px 0;
    width: 280px;
    height: 160px;
    display: flex;
    flex-direction: column;
    /* background-color: #fff; */
    background-image: url("../images/frame4.png");
    /* border-radius: 50%; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 290px 165px;
    /* animation: ${spin} 1s 10ms ease forwards;
    animation-iteration-count: 1; */

    ::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      top: -17px;
      background-image: url(${userData.pizza_image});
      background-repeat: no-repeat;
      position: absolute;
      left: 33px;
      opacity: 1;
      z-index: 10;
    }
  `);

  function incDer(i) {
    increment(i);
  }
  function decDer(i) {
    decrement(i);
  }

  return (
    <div className="card">
      <div className="header">
        <p className="card_title">{userData.pizza_name}</p>
        {inc > 0 ? (
          <img className="header_img" src="./images/p7.png" alt="" />
        ) : null}
      </div>
      {toggle !== true ? (
        <Card_img className="banner"></Card_img>
      ) : (
        <div className="description_holder">
          {userData.pizza_name.split(' ')[0]} Toppings:
          <div className="description_s">{descr[i].desc_value}</div>
        </div>
      )}
      <button id="view_top" onClick={() => setToggle(prevtoggle => !prevtoggle)}>View Toppings</button>
      {/* {toggle && (
        <div className="description_holder">
          Toppings:
          <div className="description_s">{descr[i].desc_value}</div>
        </div>
      )} */}
      <div className="price">
        Cost: ₹ <b>{userData.pizza_price}</b>
      </div>
      <div className="button">
        <div
          className="incdec dec"
          onClick={() => {
            decDer(i);
            decrementtt();
          }}
        >
          -
        </div>
        <div className="val">{userData.pizza_number}</div>
        <div
          className="incdec inc"
          onClick={() => {
            incDer(i);
            incrementtt();
          }}
        >
          +
        </div>
      </div>
      <div className="radio_button_div">
        <button
          id="regular"
          className="radio_buttons"
          onClick={() => {
            regular(i);
            regularr();
          }}
        >
          Regular
        </button>
        <button
          id="medium"
          className="radio_buttons"
          onClick={() => {
            medium(i);
            mediumm();
          }}
        >
          Medium
        </button>
        <button
          id="large"
          className="radio_buttons"
          onClick={() => {
            large(i);
            largee();
          }}
        >
          Large
        </button>
      </div>
      {/* <div class="radio_toggle">
        <input class="radio_button" type="radio" name="r" id='r1'/>
        <label for="r1">Regular</label>
        <br />
        <input class="radio_button" type="radio" name="r" id='r2'/>
        <label for="r2">Medium</label>
        <br />
        <input class="radio_button" type="radio" name="r" id='r3'/>
        <label for="r3">Large</label>
        <br />
      </div> */}
    </div>
  );
};
