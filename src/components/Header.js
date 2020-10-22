import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
        <h1>My e-Book Library</h1>
        <div className="breadcrumb">
          <Link to="/"> Home </Link> |
          <Link to="/about"> About </Link> |
          <Link to="/bookcase" className="bookLink">  CART ({props.cartLength}) </Link>
        </div>
    </div>
  );
}

export default Header;

