import React from 'react';
import Book from './Book' ;


const Pagination= ({booksPerPage, totalBooks,paginate }) => {
    const pageNumbers = [];
  

function handlePagination (event, number) {
    event.preventDefault();
    paginate(number);
    }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={(event) => handlePagination(event, number)} href="!#" className="page-link">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
    );
        };

export default Pagination;