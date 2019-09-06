import React, { Component, Fragment } from 'react';
import Header from './page/components/header'; //lp페이지
import Footer from './layout/footer'; //공통 푸터
import Listpage from './page/lp'; //lp페이지

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header/>
        <Listpage/>
        <Footer/>
      </Fragment>
    );
  }
  
}

export default App;
