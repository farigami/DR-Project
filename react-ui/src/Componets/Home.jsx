import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ownStyle.css'

const Home = () => {
    return (
        <div className='just-element'>
            <h1>Django <p className="emoji">❤️</p> React</h1>
            <h2>This my practic to learn frontend React with backend Django</h2>
            <Button href='https://github.com/farigami' variant="outline-success">GitHub</Button>
        </div>
    )
}

export default Home