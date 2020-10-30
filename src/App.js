import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';
import './App.css';
import Bookcase from './components/Bookcase';
import Button from 'react-bootstrap/Button';


const App = (props) => {

  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');
  const [cart, setCart] = useState([]);
  //const[ selectedBook, setSelectedBook ] = useState('');




  

  const addBook = (book) => {
    console.log(book);
    setCart([...cart, book])
  };


  const removeBook = (removeFromCart) => {
    setCart(cart.filter(book => book !== removeFromCart)
    );
  };



  useEffect(() => {
    
    document.title = `My Library ${cart.length} Read`;
    Array.from(document.getElementsByClassName("bookLink")).forEach((el) => {
      el.innerText = ` Cart (${cart.length})`;
    });
  });

  async function findBooks(value) {

    //Fetch data from server
    const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }






  
  

return (
  <BrowserRouter>
<Route exact path="/" render={() => (
<React.Fragment>
<Header cartLength={cart.length}/>
<Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
<BookList books={books} addBook={addBook} removeBook={removeBook} 
showDeleteBtn={false} showAddBtn={true}  showDescription={false}/>
</React.Fragment>
)} />
<Route path="/bookcase" render={() => (
<React.Fragment>
<Header cartLength={cart.length}/>
<BookList books={cart} addBook={addBook} removeBook={removeBook} 
showDeleteBtn={true} showAddBtn={false} showDescription={true}/> 
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
 

