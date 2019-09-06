import React, { Component, Fragment } from 'react';
import Header from './components/header';
import Keyword from './components/keyword';
import Category from './components/category';
import Itemlist from './components/itemlist';
import axios from 'axios';

class Listpage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      Itemcard: [],
      ItemcardLength: null,
      BrandFinder: []
    };
  }


  componentDidMount(){
    axios
      .get('./SearchJson.json')
      .then(({ data })=> {
        this.setState({ 
          Itemcard: data.Item,
          ItemcardLength: data.Item.length,
          BrandFinder: data.BrandFinderList
        });
      })
      .catch((err)=> {})
  }
  renderItem = () =>{
    const number = this.state.ItemcardLength;
    const items = this.state.Itemcard.slice(0,number).map((Itemcard,index)=>{
      return <Itemlist GoodsCode={Itemcard.GoodsCode}
      ImageURL={Itemcard.ImageURL}
      BrandName={Itemcard.BrandName}
      GoodsName={Itemcard.GoodsName}
      SalePrice={Itemcard.SalePrice}
      DeliveryText={Itemcard.DeliveryText}
      DeliveryInfo={Itemcard.DeliveryInfo}
      BuyCount={Itemcard.BuyCount}
      />
    });
  
    return items
  }

    render() {
      //console.log(this.state.Itemcard) 아이템카드 데이터 정렬 console
        return (
          <Fragment>
            <div id="content" className="state--content_view_type__list">
              <div className="section--content_body_container">
                <Keyword />
                <Category length={this.state.ItemcardLength} />
                <div className="region--content_body">
                  <div id="section--inner_content_body_container">
                    <div className="component component--item_card type-smiledelivery element-info">
                      {this.renderItem()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}

export default Listpage;
