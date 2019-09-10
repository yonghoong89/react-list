import React, { Component, Fragment } from 'react';
import Header from './components/header';
import Keyword from './components/keyword';
import Category from './components/category';
import Itemlist from './components/itemlist';
import Filter from './components/filter';
import axios from 'axios';

class Listpage extends Component {

  state = {
    Itemcard: [],
    ItemcardPrice: [],
    keyword:[],
    BrandFinder: [],
    viewtype: [false,true],
    filterToggle:true
  };


  componentDidMount(){
    axios.get('./SearchJson.json')
      .then(({ data })=> {
        console.log(data)
        this.setState({ 
          Itemcard: data.Item,
          keyword: data.Category,
          BrandFinder: data.BrandFinderList
        });
      })
      .catch((err)=> {})
  }
  renderItem = () =>{
    const number = this.state.Itemcard.length;
    const items = this.state.Itemcard.slice(0,number).map((Itemcard,index)=>{

      return <Itemlist GoodsCode={Itemcard.GoodsCode}
      ImageURL={Itemcard.ImageURL}
      BrandName={Itemcard.BrandName}
      GoodsName={Itemcard.GoodsName}
      SalePrice={Itemcard.SalePrice}
      DeliveryText={Itemcard.Delivery.DeliveryText}
      DeliveryInfo={Itemcard.Delivery.DeliveryInfo}
      BuyCount={Itemcard.BuyCount}
      key={index}
      />
    });
  
    return items
  }

  renderKeyword = () =>{
    const number = this.state.keyword.length;
    const keywords = this.state.keyword.slice(0,number).map((keyword,index)=>{

      return <Keyword Category={keyword.CategoryNm} key={index} />
    });
  
    return keywords
  }

  _viewTypeChange = () =>{
    const gellery =  (this.state.viewtype[0]) ? false : true;
    const list =  (this.state.viewtype[1]) ? false : true;

    this.setState({ 
      viewtype: [gellery,list]
    });
  }

  //정렬 가격순(저렴)
  _soltPriceLow = () =>{
    const soltingFielf = "SellPrice";
    const solting = this.state.Itemcard.sort(function(a, b){
      return a[soltingFielf] - b[soltingFielf]
    });
    this.setState({ 
      Itemcard : solting
    });
  }

  filterToggle = () =>{
    const toggle =  (this.state.filterToggle) ? false : true;
    this.setState({ 
        filterToggle: toggle
    });
  }


    render() {
      
      console.log(this.state.Itemcard) //아이템카드 데이터 정렬1
      console.log(this.state.brandfinder) //아이템카드 데이터 정렬2
      console.log(this.state.filterToggle) //하위에서 올라온 상위컴포넌트 변경확인
      console.log(this.state.viewtype) //하위에서 올라온 상위컴포넌트 변경확인
      console.log(this.state.ItemcardPrice) //솔팅 가격낮은
        return (
          <Fragment>
            <div id="content" className={this.state.viewtype[0] ? "state--content_view_type__gallery" : "state--content_view_type__list"}>
              <div className="section--content_body_container" onClick={this._soltPriceLow}>
                <div className="section--search_relative_information section--relative_keywords_container">
                  <div className="section--relative_keywords">
                      <ul className="list--relative_keywords">
                        {this.renderKeyword()}
                      </ul>
                  </div>
              </div>
                <Category length={this.state.Itemcard.length} filterToggle={this.filterToggle} />
                <div className="region--content_body">
                  <div id="section--inner_content_body_container">
                      {this.renderItem()}
                  </div>
                </div>
                <Filter filterToggle={this.state.filterToggle} filterOnChange={this.filterToggle} viewtypeState={this.state.viewtype} viewtypeChange={this._viewTypeChange} />
              </div>
            </div>
          </Fragment>
        );
    }
}

export default Listpage;
