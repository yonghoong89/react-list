import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {

  state = {
    Itemcard:[],
    FavoriteIndex: [],
  };

  componentDidMount(){
    axios.get('./SearchJson.json')
      .then(({ data })=> {
        this.setState({ 
          Itemcard: data.Item,
          keyword: data.Category
        });
      })
      .catch((err)=> {
        alert('error')
      })
  }

  renderItem = (Favorite) =>{

    const items = this.state.Itemcard.slice(0,10).map((Itemcard,index)=>
      <li ranking={Itemcard.ranking} key={index}>{Itemcard.ranking} / {Itemcard.GoodsCode} / {Favorite}</li>
    );
    return items

  }

    render() {
      const {Favorite} = this.props

        return (
            <p>{this.renderItem(Favorite)}</p>
        );
    }
}

export default Cart;
