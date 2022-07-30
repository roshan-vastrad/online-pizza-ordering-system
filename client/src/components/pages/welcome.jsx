import React from "react";
import "../welcomebox/welcome.css";

export function Welcome(props) {

    const lessgo = async (e) => {
        e.preventDefault();
        window.location.href = "/login";
      };

  return (
    <>
      <div className="containerX">
        <div className="contentX">
          <div className="cardX">
            𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐕𝐢𝐬𝐯𝐞𝐬𝐯𝐚𝐫𝐚𝐲𝐚 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐨𝐟 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠
          </div>
          <div className="symbolX"></div>
          <div className="both">
            <div className="cardXY">
              Department of Computer Science and Engineering
            </div>
            {/* 𝐃𝐞𝐩𝐚𝐫𝐭𝐦𝐞𝐧𝐭 𝐨𝐟 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐚𝐧𝐝 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 */}
            <div id="cardX2">
              A DBMS Project <br /> "Online Pizza Delivery"
            </div>
          </div>
          <div className="both2">
            <div className="cardY">
              <u> Submitted By: </u> <br /> Roshan G Vastrad (19GANSE036) <br /> Sachin A
              G (19GANSE039)
            </div>
            <div className="cardY">
            <u>Under the guidence of:</u> <br /> Dr. Samyama Gunjal <br /> Shruti Gupta
            </div>
          </div>
          <button className="final" onClick={lessgo}>Login / Register</button>
        </div>
      </div>
    </>
  );
}
