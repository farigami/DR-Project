import React from 'react'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo1 from './img/logo1.svg'
import logo2 from './img/logo2.svg'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='/' className='m-auto'>
            <img src={logo1} alt='' width='40px' height='40px'  />
            <img src={logo2} alt='' width='50px' height='50px'  />
          </Navbar.Brand>
        </Navbar>
    )
}

export default Header