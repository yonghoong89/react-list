import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {

  state = {
    Itemcard:[],
    cartList: [],
  };

  componentDidMount(cartList){
    console.log(cartList)
    axios.get('./SearchJson.json')
      .then(({ data })=> {
        //console.log(data)
        this.setState({ 
          Itemcard: data.Item
        });
      })
      .catch((err)=> {})
  }
  renderItem = (cartList) =>{

    const items = this.state.Itemcard.slice(0,10).map((Itemcard,index)=><li ranking={Itemcard.ranking} key={index}>{Itemcard.ranking} / {Itemcard.GoodsCode} / {cartList}</li>);
  
    return items
  }
    render() {
      const {cartList} = this.props
        return (
            <p>{this.renderItem(cartList)}</p>
        );
    }
}

export default Cart;
