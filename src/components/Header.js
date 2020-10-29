import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="div">
        <h1></h1>
        <div className="breadcrumb">
          <Link className="nav-links" to="/"> HOME </Link> 
          <Link className="nav-links" to="/about"> ABOUT </Link> 
          <Link className="nav-links" to="/bookcase" className="bookLink">  CART ({props.cartLength}) </Link>
        </div>
    </div>
  );
}

export default Header;

