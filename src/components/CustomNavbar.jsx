
import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
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
          <Nav pullRight>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavDropdown eventKey={2} title="Portrait" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1} href="/babies">Babies</MenuItem>
              <MenuItem eventKey={2.2} href="/graduates">Graduates</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Weddings" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/engagement">Engagement</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="Info" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1} href="/about">About Me</MenuItem>
              <MenuItem eventKey={4.2} href="/contact">Contact</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}