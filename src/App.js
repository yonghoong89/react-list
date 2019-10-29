import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from'react-router-dom';
import Header from './page/components/header'; //lp페이지
import Footer from './layout/footer'; //공통 푸터
import Cart from './page/cart'; //장바구니
import Listpage from './page/lp'; //lp페이지
import NotFound from './page/NotFound'; //lp페이지

class App extends Component {
  state = {
    Favorite:[],
    cartNumber: "0",
  };

  addFavorite = (keyValue) =>{
    console.log(keyValue)

    if(this.state.Favorite.some(x => x === keyValue)){
      alert('관심상품 제거')
      this.setState({
        Favorite: this.state.Favorite.splice(keyValue)
      })
    }else{
      alert('관심상품 추가')
      this.setState({
        Favorite: this.state.Favorite.concat(keyValue)
      })
    }
  }


  render() {
    console.log(this.state.cartNumber)
    console.log(this.state.Favorite)
    return (
      <Router>
        <Route path="/" render={ props => <Header cartNumber={this.state.Favorite.length} /> }/>
        <Route path="/lp" render={ props => <Listpage addFavorite={this.addFavorite} /> }/>
        <Route path="/cart" render={ props => <Cart Favorite={this.state.Favorite} /> }/>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
  
}

export default App;
