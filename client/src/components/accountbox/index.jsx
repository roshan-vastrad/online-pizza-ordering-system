import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Login } from "./login";
import { Register } from "./register";
import { Container, FormsContainer, Navbar, InsCon, Ins3Con } from "./common";
import { AccountContext } from "./accountContext";
import { Navig } from "./navbar";
import { Menu } from "../pages/menu";
import { Order } from "../pages/order";
import { Welcome } from "../pages/welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const con = document.querySelector(".container");

export function AccountBox(props) {
  return (
    <Router>
      
        <Switch>
          <Route path="/" exact>
          <Welcome/>
          </Route>
          <Route path="/login" exact>
            <Container>
            <Navig></Navig>
            <FormsContainer>
              <InsCon />
              <Ins3Con />
              <Login />
            </FormsContainer>
            </Container>
          </Route>
          <Route path="/register" exact>
            <Container>
            <Navig></Navig>
            <FormsContainer>
              <InsCon />
              <Ins3Con />
              <Register />
            </FormsContainer>
            </Container>
          </Route>
          <Route path="/home" exact>
            <Menu />
          </Route>
          <Route path="/order" exact>
            <Order />
          </Route>
        </Switch>
      
    </Router>
  );
}
