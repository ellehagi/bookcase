import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book' ;
import BookList from './BookList';

const Cart = (props) => {
    return (
        <React.Fragment>
        <Link to="/"> Home </Link>
       <Link to="/about">About</Link>
       <Link to="/bookcase" className="bookLink">  CART ({props.cartLength}) </Link>
       <button onClick={() => props.removeBook(props.book)}>Add +</button>
         <div> 
       <h1>My bookcase</h1>
       
        
      
        </div>


        </React.Fragment>
    );
};

export default Cart;