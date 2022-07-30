import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #d3d7de;
  overflow: hidden;

  /* :before{
        content:'';
        position: absolute;
        /* left: 100px; */
  /* top: 95px; */
  /* width: 60vw; */
  /* height: 100%;  */
  /* background: url('./images/p6.png'); */
  /* background-repeat: no-repeat; */
  /* background-size: 900px 700px; */
  /* }  */

  /* :before {
        content: '';
        position: absolute;
        width: 1000px;
        height: 1000px;
        left: -200px;
        top: -100px;
        background-color: #5995fd;
        border-radius: 50%;   
    } */
`;

export const InsCon = styled.div`
  position: absolute;
  /* left: 50px; */
  top: -20px;
  width: 50%;
  height: 100vh;
  background: url("./images/back1.png");
  background-repeat: no-repeat;
  background-size: 700px 660px;
`;
export const Ins3Con = styled.div`
  position: absolute;
  left: 680px;
  top: 200px;
  width: 30%;
  height: 100vh;
  background: url("./images/back3.png");
  background-repeat: no-repeat;
  background-size: 200px 400px;
`;
export const Ins2Con = styled.div`
  position: absolute;
  left: 305px;
  top: ${(props) => (props.variant === "login" ? "205px" : "540px")};
  width: 20%;
  height: 20vh;
  background: url("./images/back2.png");
  background-repeat: no-repeat;
  background-size: 70px 50px;
  overflow: visible;
`;

//////////////////////////////////////////////////////////overflow: hidden
export const Navbar = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color: #202020;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  /* :before {
        content: '';
        position: absolute;
        width: 1000px;
        height: 1000px;
        left: -200px;
        top: -100px;
        background-color: #d3d7de;
        border-radius: 50%;   
    } */
`;

export const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: row;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 60vh;
    top: 100px;
    left: -550px;
    background: url("./images/back10.png");
    background-repeat: repeat;
    background-size: 200px 210px;
    border: 3px solid grey;
    border-radius: 300px;
    overflow: hidden;
  }
`;

export const Registerup = styled.div`
  position: relative; //absolute
  top: 1.1rem;
  left: 65%;
  /* transform: translate(50%, 0%); */
  width: 30%;
`;

export const Logup = styled.div`
  position: absolute;
  top: 25%;
  left: 65%;
  /* transform: translate(-50%, -0%); */
  /* transform: translate(50%, 0%); */
  width: 30%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-size: ${(props) => (props.variant === "login" ? "2.2rem" : "1.7rem")};
  color: #444;
  margin-bottom: 10px;
`;

export const InputField = styled.div`
  max-width: 350px;
  width: 100%;
  height: ${(props) => (props.variant === "login" ? "55px" : "40px")};
  background-color: #f0f0f0;
  margin: ${(props) => (props.variant === "login" ? "10px 0" : "7px")};
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: ${({ fsize }) => fsize};
  color: #333;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  ::placeholder {
    color: #aaa;
    font-weight: 500;
  }
`;

export const IL = styled.i`
  text-align: center;
  line-height: 55px;
  color: #acacac;
  font-size: 1.1rem;
`;

export const IR = styled.i`
  text-align: center;
  line-height: 40px;
  color: #acacac;
  font-size: 0.9rem;
`;

export const Button = styled.input`
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #5995fd;
  color: white;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

  :hover {
    background-color: #4d84e2;
  }
`;

export const Para = styled.p``;
