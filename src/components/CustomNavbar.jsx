import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h2>Ko-Ann Richardsdon Photography</h2>
      </Jumbotron>
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
                KoAnn Photography
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About KoAnn
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/weddings" to="/weddings">
              Weddings
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/portraits" to="/portraits">
              Portraits
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}