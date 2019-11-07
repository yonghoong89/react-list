import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from'react-router-dom';
import Header from './page/components/header'; //lp페이지
import Footer from './layout/footer'; //공통 푸터
import Listpage from './page/lp'; //lp페이지

class App extends Component {
  state = {
    Favorite:[],
    cartNumber: "0",
  };

  render() {
    return (
     <div>
        <Header/>
        <Listpage />
        <Footer />
      </div> 
    );
  }
  
}

export default App;
