import React from 'react';


const Book = (props) => {
  const info = props.book.volumeInfo;
  const {id, volumeInfo: { title, authors, description, imageLinks: { thumbnail } } } = props.book;
  const {showDeleteBtn} = props;
  const {showAddBtn} = props;
  const {showDescription} = props;
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
      <img className="img" src={thumbnail} />
      <h2 className="author">{title} - {renderAuthors()}</h2>
      <p className="price">{renderAmount()}</p>
      {showDescription&& <p className="description">{description}</p>
}
    


      {showAddBtn && <button className="addbtn"onClick={() => props.addBook(props.book)}>Add +</button> 
}
{showDeleteBtn && <button className="removebtn" onClick={() => props.removeBook(props.book)}
      >Remove</button>
}  

      
    </div>
  );
}
export default Book;







