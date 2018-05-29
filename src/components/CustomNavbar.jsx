
import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
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
              {/* <div className="menu-description">Return Home</div> */}
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About KoAnn
              {/* <div className="menu-description">Learn more</div> */}
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/contact" to="/contact">
              Contact
              {/* <div className="menu-description">Wedding Photo Gallery</div> */}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}