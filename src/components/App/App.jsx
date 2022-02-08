import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from "../Register/Register";
import './App.css';
 import Header from "../Header/Header";
import BookListing from '../BookListing/BookListing';
import SearchBox from '../SearchBox/SearchBox';

class App extends Component {
  render() {
    return (
       <Router>
           <div>
           <Header />
           <SearchBox />
                <Routes>
                
                 <Route exact path='/' element={< Register />}></Route>
                 <Route exact path='/bookList' element={< BookListing />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;