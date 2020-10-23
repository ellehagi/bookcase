import React from 'react';

const Book = (props) => {
  const info = props.book.volumeInfo;
  const {id, volumeInfo: { title, authors, description, imageLinks: { thumbnail } } } = props.book;
  const renderAmount = () => {
    if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
      return '£' + props.book.saleInfo.listPrice.amount;
    }
    return;
  }
  

  const renderAuthors = () => {
    if (authors.length === 1) {
      return authors;
    }
    return authors.map(author => author + ', ');
  }
  return (
    <div className="books">
      <img src={thumbnail} />
      <h2>{title} - {renderAuthors()}</h2>
      <p>{renderAmount()}</p>
      <p>{description}</p>
      <button onClick={() => props.addBook(props.book)}>Add +</button>
      <button onClick={() => props.removeBook(props.book)}>x</button> 
    </div>
  );
}
export default Book;







