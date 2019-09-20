import React, { Component, Fragment } from 'react';
import Keyword from './components/keyword';
import Category from './components/category';
import Itemlist from './components/itemlist';
import Filter from './components/filter';
import axios from 'axios';

class Listpage extends Component {

  state = {
    renderList: [true,false,false],
    Itemcard: [],
    ItemcardLowPrice: [],
    keyword:[],
    viewtype: [false,true],
    filterToggle:true,
    optionLayer:false,
    adLayer:false
  };

  componentDidMount(){
    axios.get('./SearchJson.json')
      .then(({ data })=> {
        //console.log(data)
        this.setState({ 
          Itemcard: data.Item,
          keyword: data.Category
        });
      })
      .catch((err)=> {})
  }

  renderItem = (addCart) =>{
    const number = this.state.Itemcard.length;
    const items = this.state.Itemcard.slice(0,number).map((Itemcard,index)=> <Itemlist ranking={Itemcard.ranking}
      GoodsCode={Itemcard.GoodsCode}
      ImageURL={Itemcard.ImageURL}
      BrandName={Itemcard.BrandName}
      GoodsName={Itemcard.GoodsName}
      SalePrice={Itemcard.SalePrice}
      DeliveryText={Itemcard.Delivery.DeliveryText}
      DeliveryInfo={Itemcard.Delivery.DeliveryInfo}
      BuyCount={Itemcard.BuyCount}
      key={index}
      keyValue={index}
      addCart={addCart}
      addFavorite={this.addFavorite}
      IsFavoriteSeller ={Itemcard.IsFavoriteSeller}
      />
    );
  
    return items
  }
  addFavorite = (keyValue) =>{
    console.log(this.state.Itemcard[keyValue].IsFavoriteSeller)
    
    if(this.state.Itemcard[keyValue].IsFavoriteSeller){
      alert('관심상품에 제거되었습니다.')
      // this.setState({
      // })
    }else{
      alert('관심상품에 추가되었습니다.')
    }
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

  filterToggle = () =>{
    const toggle =  (this.state.filterToggle) ? false : true;
    this.setState({ 
        filterToggle: toggle
    });
  }

  optionLayerToggle = () =>{
    const toggle =  (this.state.optionLayer) ? false : true;
    this.setState({ 
      optionLayer: toggle
    });
  }

  adLayerToggle = () =>{
    const toggle =  (this.state.adLayer) ? false : true;
    this.setState({ 
      adLayer: toggle
    });
  }

  sortingChange1 = () =>{
    this.setState({ 
      renderList: [true,false,false]
    });
    this._sortRanking();
  }
  sortingChange2 = () =>{
    this.setState({ 
      renderList: [false,true,false]
    });
    this._sortPriceLow();
  }
  sortingChange3 = () =>{
    this.setState({ 
      renderList: [false,false,true]
    });
    this._sortBuyCount();
  }

  //정렬 랭킹순
  _sortRanking = () =>{
    const sortingFielf = "ranking";
    const sorting = this.state.Itemcard.sort(function(a, b){
      return a[sortingFielf] - b[sortingFielf]
    });
    this.setState({ 
      Itemcard : sorting
    });
  }
  //정렬 가격순(저렴)
  _sortPriceLow = () =>{
    const sortingFielf = "SellPrice";
    const sorting = this.state.Itemcard.sort(function(a, b){
      return a[sortingFielf] - b[sortingFielf]
    });
    this.setState({ 
      Itemcard : sorting
    });
  }
  //구매순
  _sortBuyCount = () =>{
    const sortingFielf = "BuyCount";
    const sorting = this.state.Itemcard.sort(function(a, b){
      return b[sortingFielf] - a[sortingFielf]
    });
    this.setState({ 
      Itemcard : sorting
    });
  }
    render() {
      const {addCart} = this.props
      console.log(addCart)
      console.log(this.state.Itemcard) //아이템카드 데이터 정렬1
      console.log(this.state.cartList)
        return (
          <Fragment>
            <div id="content" className={this.state.viewtype[0] ? "state--content_view_type__gallery" : "state--content_view_type__list"}>
              <div className="section--content_body_container">
                <div className="section--search_relative_information section--relative_keywords_container">
                  <div className="section--relative_keywords">
                      <ul className="list--relative_keywords">
                        {this.renderKeyword()}
                      </ul>
                  </div>
              </div>
                <Category test={this.state.test} length={this.state.Itemcard.length} filterToggle={this.filterToggle} optionLayer={this.state.optionLayer} adLayer={this.state.adLayer} optionLayerToggle={this.optionLayerToggle} adLayerToggle={this.adLayerToggle} sortingChange1={this.sortingChange1} sortingChange2={this.sortingChange2} sortingChange3={this.sortingChange3} renderList={this.state.renderList} />
                <div id="region--content_body" className="region--content_body">
                  <div id="section--inner_content_body_container">
                    <div className="section--module_wrap">
                      {this.renderItem(addCart)}
                    </div>
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
