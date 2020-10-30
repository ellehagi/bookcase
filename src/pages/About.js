import React from 'react';
import {Link} from 'react-router-dom';

const About = (props) => {
    
        return (
            <div className="div">
                 <h1>About</h1>
                <div className="breadcrumb">
                  <Link className="nav-links" to="/"> HOME </Link> 
                  <Link className="nav-links" to="/about"> ABOUT </Link> 
                  <Link className="nav-links" to="/bookcase" className="bookLink">  CART ({props.cartLength}) </Link>
                </div>
                <div className="page">Welcome to the Bookcase Application.</div>
            </div>
    )
}


export default About;
