import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from "../Register/Register";
import './App.css';
 import Header from "../Header/Header";
import BookListing from '../BookListing/BookListing';
import SearchBox from '../SearchBox/SearchBox';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
       <Router>
           <div>
           <Header />
           <SearchBox />
                <Routes>
                
                 <Route exact path='/' element={< Register />}></Route>
                 <Route exact path='/BookListing' element={< BookListing />}></Route>
          </Routes>
          <Footer />
          </div>
       </Router>
   );
  }
}
 
export default App;