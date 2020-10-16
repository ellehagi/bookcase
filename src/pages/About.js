import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <React.Fragment>
        <Link to="/"> Home </Link>

        <div>
            <h1>Welcome</h1>
            <p>The following application was created by. This bookcase app displays a list of books that a user can save to a local bookcase
Click on the "Add + " button to add a book to your bookcase. Use the search bar to find the latest books by name, author or description</p>
        </div>
        </React.Fragment>
    );
};

export default About;