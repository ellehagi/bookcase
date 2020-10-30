import React, { useState } from 'react';
import Book from './Book' ;
import Pagination from './Pagination';


const BookList = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const indexOfLastBook = currentPage * booksPerPage;
   const indexOfFirstBook = indexOfLastBook - booksPerPage;
   const currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);
  
const paginate = pageNumber => setCurrentPage(pageNumber);

 return (
     <React.Fragment>
         
     <div>
     {currentBooks.map(book => <Book key={book.id} book={book} currentBooks={currentBooks} addBook={props.addBook} removeBook={props.removeBook} showDeleteBtn={props.showDeleteBtn} showAddBtn={props.showAddBtn} showDescription={props.showDescription}/>) }
    
    </div>

    <Pagination booksPerPage={booksPerPage} totalBooks={props.books.length} paginate={paginate} /> 

     </React.Fragment>
 );
};


export default BookList;

