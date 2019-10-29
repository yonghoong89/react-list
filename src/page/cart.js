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
    console.log(Favorite)
    const itemsLength = this.state.Itemcard.length;

    const items = this.state.Itemcard.slice(0,itemsLength).map(function(Itemcard, index) {

      if(Itemcard.ranking = Favorite[index]){
        return <li ranking={Itemcard.ranking} key={index}>{Itemcard.ranking} / {Itemcard.GoodsCode} / {Favorite}</li>
      }

    }.bind(this));
    
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
