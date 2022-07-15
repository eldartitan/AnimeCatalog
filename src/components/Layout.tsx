/** @format */

import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" style={{textDecoration: "none"}}>
            <Navbar.Brand>AnimeCaten</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              as="ul"
            >
              <Nav.Item>
                <Nav.Link as={NavLink} to="/animetop">
                  Top Anime
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/search">
                Search
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {/* <Search /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
