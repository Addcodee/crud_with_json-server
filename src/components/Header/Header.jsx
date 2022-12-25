import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Link style={{textDecoration: 'none'}} to={"/"}>
            <Navbar.Brand>Contacts page</Navbar.Brand>
          </Link>
          <Link style={{textDecoration: 'none'}} to={"/add"}>
            <Navbar.Brand>Add page</Navbar.Brand>
          </Link>
          <Link style={{textDecoration: 'none'}} to={"/about-us"}>
            <Navbar.Brand>About us</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
