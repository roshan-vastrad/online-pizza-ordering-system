import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  FormsContainer,
  Form,
  Logup,
  H2,
  Input,
  InputField,
  Para,
  IL,
  Button,
  Ins2Con,
} from "./common";

import "../FontAwesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inState = {
  c_email: "",
  c_password: "",
};

export function Login(props) {
  const [forData, setForData] = useState(inState);

  const handleChang = (e) => {
    const { value, name } = e.target;
    setForData({ ...forData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (forData.c_email.length > 0) {
      const res = await axios.post("http://localhost:5000/user/login", forData);
      if (res.status === 200) {
        localStorage.setItem("login_info", JSON.stringify(res.data.result));
        window.location.href = "/home";
      }
    }
  };

  return (
    <Logup>
      <Form onSubmit={handleSubmit}>
        <H2>Login</H2>

        <InputField className="input-field" variant="login">
          <IL>
            <FontAwesomeIcon icon={["fas", "at"]} />
          </IL>
          <Input
            type="text"
            name="c_email"
            placeholder="Email"
            variant="login"
            required
            fsize="1.1rem"
            onChange={handleChang}
            value={forData.c_email}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="login">
          <IL>
            <FontAwesomeIcon icon={["fas", "lock"]} />
          </IL>
          <Input
            type="password"
            name="c_password"
            placeholder="Password"
            variant="login"
            required
            fsize="1.1rem"
            onChange={handleChang}
            value={forData.c_password}
          ></Input>
        </InputField>
        <Button className="btn solid" type="submit" value="Login"></Button>
      </Form>
      <Ins2Con variant="login" />
    </Logup>
  );
}
