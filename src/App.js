import React, { Component } from 'react';
import Head from './layout/head'; //공통 헤더
import Footer from './layout/footer'; //공통 푸터
import Listpage from './page/lp'; //lp페이지

class App extends Component {

  render() {
    return (
      <div>
        <Head/>
        <Listpage/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
