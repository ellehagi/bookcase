import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book' ;
import BookList from './BookList';

const Cart = (props) => {
    return (
        <React.Fragment>
            <div className="nav">
        <Link className="nav-links" to="/"> HOME </Link>
       <Link className="nav-links" to="/about">ABOUT</Link>
       <Link className="nav-links" to="/bookcase" className="bookLink">  CART ({props.cartLength}) </Link>
       
        </div>


        </React.Fragment>
    );
};

export default Cart;