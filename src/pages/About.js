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
            <h2 className="title-name">Welcome to the Bookcase Application</h2>
            <p className="body-name">The following application was created by Elham. This bookcase app displays a list of books that a user can save to a local bookcase
Click on the "Add + " button to add a book to your bookcase. Use the search bar to find the latest books by name, author or description</p>
            </div>
           
    )
}


export default About;
