import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const renderCart = () => (  
  <h1>cart</h1>
);
const page = () => {

}
const navigateTo = (nextPage) => {
page(nextPage);
};
const PAGE_CART = 'cart';
{page === PAGE_CART && renderCart()}
const Header = (props) => {
  //const [page, setPage] = useState(PAGE_CART);

  return (
    <div className="header">
        <h1>My e-Book Library</h1>
        <button onClick={() => navigateTo(PAGE_CART)}>cart({props.cartLength})</button>
        <div className="breadcrumb">
          <Link to="/"> Home </Link> |
          <Link to="/about"> About </Link> |
          <Link to="/bookcase" className="bookLink"> Bookcase </Link>

        </div>
    </div>
  );
}

export default Header;