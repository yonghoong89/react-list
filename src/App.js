import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from'react-router-dom';
import Header from './page/components/header'; //lp페이지
import Footer from './layout/footer'; //공통 푸터
import Cart from './page/cart'; //장바구니
import Listpage from './page/lp'; //lp페이지
import NotFound from './page/NotFound'; //lp페이지

class App extends Component {
  state = {
    cartList:[],
    cartNumber: "0",
  };

  addCart = (keyValue) =>{
    this.setState({
      cartList: this.state.cartList.concat(keyValue)
    })
    alert('장바구니에 추가되었습니다')
  }

  render() {
    console.log(this.state.cartNumber)
    console.log(this.state.cartList)
    return (
      <Router>
        <Route path="/" render={ props => <Header cartNumber={this.state.cartList.length} /> }/>
        <Route path="/lp" render={ props => <Listpage addCart={this.addCart} /> }/>
        <Route path="/cart" render={ props => <Cart cartList={this.state.cartList} /> }/>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
  
}

export default App;
