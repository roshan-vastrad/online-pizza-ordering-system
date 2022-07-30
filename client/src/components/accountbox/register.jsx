import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  FormsContainer,
  Form,
  Registerup,
  H2,
  Input,
  InputField,
  Para,
  IR,
  Button,
  Ins2Con,
} from "./common";

import "../FontAwesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialState = {
  f_name: "",
  m_name: "",
  l_name: "",
  c_phone: "",
  c_city: "",
  c_house: "",
  c_email: "",
  c_password: "",
  c_confirm_password: "",
};

export function Register(props) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.c_confirm_password === formData.c_password) {
      const res = await axios.post("http://localhost:5000/user/register", formData);
      if (res.status === 200) {
        window.location.href = '/login';
      }
    }
  };

  return (
    <Registerup>
      <Form onSubmit={handleSubmit}>


        {/* <div>
          {formData.err && (
            <div className="w-full text-center bg-red-100 rounded-lg py-2 text-red-600 ">
              {formData.err}
            </div>
          )}
          {formData.success && (
            <div className="w-full text-center bg-green-100 rounded-lg py-2 text-green-600 ">
              {formData.success}
            </div>
          )}
        </div> */}


        <H2 variant="register">Register</H2>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "user"]} />
          </IR>
          <Input
            type="text"
            placeholder="First_name"
            name="f_name"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.f_name}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "user"]} />
          </IR>
          <Input
            type="text"
            placeholder="Middle_name"
            name="m_name"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.m_name}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "user"]} />
          </IR>
          <Input
            type="text"
            placeholder="Last_name"
            name="l_name"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.l_name}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "phone"]} />
          </IR>
          <Input
            type="number"
            placeholder="Phone_number"
            name="c_phone"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.c_phone}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "city"]} />
          </IR>
          <Input
            type="text"
            placeholder="City"
            name="c_city"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.c_city}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "home"]} />
          </IR>
          <Input
            type="text"
            placeholder="Address"
            name="c_house"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.c_house}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "at"]} />
          </IR>
          <Input
            type="text"
            placeholder="Email"
            name="c_email"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.c_email}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "key"]} />
          </IR>
          <Input
            type="password"
            placeholder="Password"
            name="c_password"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.c_password}
          ></Input>
        </InputField>
        <InputField className="input-field" variant="register">
          <IR>
            <FontAwesomeIcon icon={["fas", "key"]} />
          </IR>
          <Input
            type="password"
            placeholder="Confirm_password"
            name="c_confirm_password"
            fsize="0.8rem"
            required
            onChange={handleChange}
            value={formData.c_confirm_password}
          ></Input>
        </InputField>
        <Button className="btn solid" type="submit" value="Register"></Button>
      </Form>
      <Ins2Con variant="register" />
    </Registerup>
  );
}
