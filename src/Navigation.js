import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { BASE_URL } from './App';

const Link = styled(NavLink).attrs((props) => ({
  exact: true,
  className: 'nav-link',
  activeClassName: 'active',
}))``;

export const Navigation = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={`/${BASE_URL}`}>
            Home
          </Link>
          <Link to={`/${BASE_URL}/loss_landscape`}>
            Loss Landscape
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
