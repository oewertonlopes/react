import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/newproject">Novo Projeto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
