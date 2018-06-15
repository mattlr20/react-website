
import React, { Component } from 'react'
import { Grid, Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Grid>
        <Navbar default collapseOnSelect fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <Image src="assets/logo.png" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                Home
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                About
              </NavItem>
              {/* <NavItem eventKey={3} componentClass={Link} href="/contact" to="/contact">
                Portrait
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/contact" to="/contact">
                Info
              </NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Grid>
    )
  }
}