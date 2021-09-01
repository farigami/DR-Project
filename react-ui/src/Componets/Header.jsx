import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo1 from './img/logo1.svg'
import logo2 from './img/logo2.svg'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='/'>
            <img src={logo1} alt='' width='40px' height='40px'  />
            <img src={logo2} alt='' width='50px' height='50px'  />
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/apps'>Apps</Nav.Link>
          </Nav>
        </Navbar>
    )
}

export default Header