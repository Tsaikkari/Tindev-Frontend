import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

import LogOut from '../LogOut'

const NavBar = () => {
  return (
    <Navbar expand="lg" collapseOnSelect className="navbar">
      <LinkContainer to="/">
        <Navbar.Brand>Tindev</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LogOut />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
