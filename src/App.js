import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';
import Cart from './components/Cart';


const App = (props) => {

  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');
  const [cart, setCart] = useState([]);
  

  const[ selectedBook, setSelectedBook ] = useState('');
  


  async function findBooks(value) { 
    const results = await  fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty pe=books&projection=lite`).then(res => res.json());
    if (!results.error) { 
    setBooks(results.items);
    } 
}

const addBook = (id) => {
  setCart([...cart, id]);
  console.log(`The Book ${id} was clicked`);
  console.log(cart);
  //setSelectedBook(title);
  //
  }
if (books.length === 0){
 return 'no books found';
}
    


    
    //setSelectedBook(title);
    //






  //return (
      //<div>
         //<BookList books={books} addBook={addBook} />
    
    //</div>
   //);

   return (
    <BrowserRouter>
<Route exact path="/" render={() => (
<React.Fragment>
<Header cartLength={cart.length}/>
 <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
<BookList books={books} addBook={addBook} />
</React.Fragment>
)} />
<Route path="/bookcase" render={() => (
<React.Fragment>
 <Header cartLength={cart.length}/>
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
