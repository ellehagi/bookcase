import React,  { useState } from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = (props) => {
    const handleSubmit = (event) =>{ 
    event.preventDefault(); 
    props.findBooks(props.keyword);
    };
    return ( 
    <form onSubmit= {handleSubmit}>
    <Form.Group controlId="searchKeyword">
    <Form.Control type="keyword" placeholder="Enter keyword" value={props.keyword}
    onChange={(e) => { props.setKeyword(e.target.value)}} />
    </Form.Group> 

<Button variant="primary" type="submit"> Submit
  </Button>
        </form>
    );   
};   
    
    
    
    export default Search;