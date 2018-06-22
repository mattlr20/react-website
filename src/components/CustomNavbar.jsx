
import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap/lib';
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
            <LinkContainer to="/">
              <NavItem eventKey={1} >
                Home
              </NavItem>
            </LinkContainer>
            <NavDropdown eventKey={2} title="Portrait" id="basic-nav-dropdown">
              <LinkContainer to="/families">
                <MenuItem eventKey={2.1}>Families</MenuItem>
              </LinkContainer>
              <LinkContainer to="/babies">
                <MenuItem eventKey={2.2} >Babies</MenuItem>
              </LinkContainer>
              <LinkContainer to="/graduates">
              <MenuItem eventKey={2.3} >Graduates</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Weddings" id="basic-nav-dropdown">
              <LinkContainer to="/engagement">
              <MenuItem eventKey={3.1} >Engagement</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown eventKey={4} title="Info" id="basic-nav-dropdown">
              <LinkContainer to="/about">
              <MenuItem eventKey={4.1} >About Me</MenuItem>
              </LinkContainer>
              <LinkContainer to="/contact">
              <MenuItem eventKey={4.2} >Contact</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}