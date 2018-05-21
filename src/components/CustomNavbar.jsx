import React, { Component } from 'react'
import { Navbar, Nav, NavItem, PageHeader, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
      <PageHeader bsClass="text-center lg-brand">
        <Link to="/">
          <Image src="assets/logo.png" />
        </Link>
      </PageHeader>
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              Ko-Ann's Photography
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
            <NavItem eventKey={3} componentClass={Link} href="/weddings" to="/weddings">
              Weddings
              {/* <div className="menu-description">Wedding Photo Gallery</div> */}
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/portraits" to="/portraits">
              Portraits
              {/* <div className="menu-description">Portrait Photo Gallery</div> */}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}