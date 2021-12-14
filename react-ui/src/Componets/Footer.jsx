import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import github from './img/GitHub-Mark-64px.png'

const Footer = () => {
  const githubURL = 'https://github.com/farigami?tab=repositories'
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" style={{ height: '46px' }}>
      <a href={githubURL} className="ml-auto">
        <img src={github} alt='' width='28px' height='28px'  />
      </a>
    </Navbar>
  )
}

export default Footer