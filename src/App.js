import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';

const App = (props) => {

  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');

  const[ selectedBook, setSelectedBook ] = useState('');

  async function findBooks(value) { 
    const results = await  fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty pe=books&projection=lite`).then(res => res.json());
    if (!results.error) { 
    setBooks(results.items);
    } 
}

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
    //setSelectedBook(title);
    }
 if (books.length === 0){
   return 'no books found';
 }

  //return (
      //<div>
         //<BookList books={books} addBook={addBook} />
    
    //</div>
   //);

   return (
    <BrowserRouter>
<Route exact path="/" render={() => (
<React.Fragment>
<Header/>
 <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
<BookList books={books} addBook={addBook} />
</React.Fragment>
)} />
<Route path="/bookcase" render={() => (
<React.Fragment>
/* <Header />
<BookList books={books} addBook={addBook} /> */
</React.Fragment>
)} />
<Route path="/about" render={() => (
<React.Fragment>
<About />
</React.Fragment>
)} />
 </BrowserRouter>
    )
  }

export default App;