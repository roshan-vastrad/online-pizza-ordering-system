import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import "../menubox/menubox.css";
import { GlobalState } from "../../GlobalState";
import { Card } from "../menubox/common";
// import useScrollPosition from "../menubox/useScrollPosition";

export function Menu(props) {
  const state = useContext(GlobalState);
  const [post, setPost] = state.menu;

  const [spost, setSpost] = useState([]);
  const [filtered, setFiltered] = useState([]);
  //   const [pt, setPt] = useState(false);
  const titleRef = useRef();

  const [descr, setDescr] = useState([]);

  // const position = useScrollPosition();

  function handleClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    (async () => {
      const rest = await axios.get("http://localhost:5000/menus/pizza");
      const userData = rest.data;
      setPost(userData);
      setFiltered(userData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const rests = await axios.get("http://localhost:5000/menus/sizes");
      const sizeData = rests.data;
      setSpost(sizeData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const restes = await axios.get("http://localhost:5000/menus/desc");
      const descData = restes.data;
      setDescr(descData);
    })();
  }, []);

  // console.log(post);

  var myArray = [];
  for (var i = 0; i < post.length; i++) {
    myArray.push({
      price: post[i].pizza_price,
    });
  }

  const regular = (i) => {
    var siz = post;
    if (siz[i].pizza_size !== spost[0].size_number) {
      siz[i].pizza_size = spost[0].size_number;
      siz[i].pizza_price = siz[i].pizza_size * myArray[i].price;
      // console.log(myArray[i].price)
      // console.log(siz[i].pizza_price);
      setPost(siz);
    }
  };

  const medium = (i) => {
    var siz = post;
    if (siz[i].pizza_size !== spost[1].size_number) {
      siz[i].pizza_size = spost[1].size_number;
      siz[i].pizza_price = siz[i].pizza_size * myArray[i].price;
      // console.log(siz[i].pizza_price);
      // console.log(siz);
      setPost(siz);
    }
  };

  const large = (i) => {
    var siz = post;
    if (siz[i].pizza_size !== spost[2].size_number) {
      siz[i].pizza_size = spost[2].size_number;
      siz[i].pizza_price = siz[i].pizza_size * myArray[i].price;
      // console.log(myArray[i].price);
      // console.log(siz[i].pizza_price);
      // console.log(siz);
      setPost(siz);
    }
  };

  const increment = (i) => {
    var datat = post;
    if (datat[i].pizza_number >= 0) {
      datat[i].pizza_number = datat[i].pizza_number + 1;
      // datat[i].pizza_price = datat[i].pizza_price + myArray[i].price;
      setPost(datat);
      // console.log(descr);
      // console.log(post);
    }
  };
  const decrement = (i) => {
    // console.log(i);
    var datate = post;
    if (datate[i].pizza_number > 0) {
      datate[i].pizza_number = datate[i].pizza_number - 1;
      // datate[i].pizza_price = datate[i].pizza_price - myArray[i].price;
      setPost(datate);
    }
  };

  // const met = async (e)=>{
  //     e.preventDefault();

  //     const rest = await axios.get("http://localhost:5000/menus/pizza");
  //     // console.log(rest.data);
  //     setPost(rest.data);
  // };

  const filterCards = (event) => {
    const values = event.target.value.toLowerCase();
    const filteredUsers = filtered.filter((user) =>
      `${user.pizza_name}`.toLowerCase().includes(values)
    );
    setPost(filteredUsers);
  };

  // function scrolll(x,y){
  //   window.scrollBy(x, y);
  // }

  const handleChange = async (e) => {
    e.preventDefault();
    localStorage.setItem("orderDetails", JSON.stringify(post));
    window.location.href = "/order";
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
      {/* {position < 630 ?  <div className="navigation">
        <div className="navigation_1">
          <img src="./images/p8.png" width="100px" x height="70px" alt="j" />
        </div>
        <div className="n2">
          <div id="yesirr">Cool</div>
          <img src="./images/p7.png" width="60px" height="50px" alt="j" />
          <div id="yesirr">Pizza</div>
        </div>
      </div> : null} */}
      <div className="about">
        <div className="home_image"></div>
        <div className="home_text"><br/> <u> About Us </u><br /><div id="home_text2">We provide the best and delicious pizza around town and we aare much known for the quality of the food that we serve. <br /> The ingredients we use are purely organic and the meat is freshly undressed and baked from our proessional chef's. <br />We are the only online delivery system who deliver your product within 30 minutes after ordering, and it's our moto too.</div> </div>
      </div>
      <div ref={titleRef} className="container1">
        <button className="scroll_button" onClick={handleClick}>
          Menu ⬇️ 
        </button>
        <div className="search_results">
          <input
            className="search_box"
            type="text"
            placeholder="Search..."
            onInput={filterCards}
          />
          <div className="results">Results - {post.length}</div>
        </div>

        <div className="card_holder">
          {post.map((user, index) => (
            <Card
              userData={user}
              increment={increment}
              decrement={decrement}
              regular={regular}
              medium={medium}
              large={large}
              key={index}
              i={index}
              descr={descr}
            />
          ))}
        </div>
        <button className="scroll_button1" onClick={handleChange}>
          Submit
        </button>
      </div>
    </>
  );
}
