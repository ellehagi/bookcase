import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book' ;
import BookList from './BookList';

const Bookcase = () => {
    return (
        <React.Fragment>
        <Link to="/"> Home </Link>
       <Link to="/about">About</Link>
         <div> 
       <h1>My bookcase</h1>
      
        </div>


        </React.Fragment>
    );
};

export default Bookcase;