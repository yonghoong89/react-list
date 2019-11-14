import React, { Component, Fragment } from 'react';
import Keyword from './components/keyword';
import Category from './components/category';
import Itemlist from './components/itemlist';
import Filter from './components/filter';
import axios from 'axios';

class Listpage extends Component {

  state = {
    //카테고리
    keyword:[],//키워드 리스트
    //필터레이어
    viewtype: [false,true],//뷰타입
    FreeDelivery:false,
    //리스트
    renderList: [true,false,false],//정렬순
    Itemcard: [],//아이템카드 리스트
    ItemcardBasic:[],
    filterfavor : false,
    filterDelivery : false
  };

  componentDidMount(){
    axios.get('./SearchJson.json')
      .then(({ data })=> {
        //console.log(data)
        this.setState({ 
          Itemcard: data.Item,
          ItemcardBasic: data.Item,
          keyword: data.Category
        });
      })
      .catch((err)=> {
        alert('error')
      })
  }

  renderItem = (addFavorite) =>{

    const number = this.state.Itemcard.length;
    let items = this.state.Itemcard.slice(0,number).map((Itemcard,index) => 
    <Itemlist ranking={Itemcard.ranking}
      GoodsCode={Itemcard.GoodsCode}
      ImageURL={Itemcard.ImageURL}
      BrandName={Itemcard.BrandName}
      GoodsName={Itemcard.GoodsName}
      SellPrice={Itemcard.SellPrice}
      DeliveryText={Itemcard.Delivery.DeliveryText}
      DeliveryInfo={Itemcard.Delivery.DeliveryInfo}
      BuyCount={Itemcard.BuyCount}
      key={index}
      addFavorite={addFavorite}
      IsFavoriteSeller ={Itemcard.IsFavoriteSeller}
      />
    );

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
    const number = this.state.Itemcard.length;
    const sortingFielf = "ranking";
    const sorting = this.state.Itemcard.slice(0,number).sort(function(a, b){
      return a[sortingFielf] - b[sortingFielf]
    });
    this.setState({ 
      Itemcard : sorting
    });
  }
  //정렬 가격순(저렴)
  _sortPriceLow = () =>{
    const number = this.state.Itemcard.length;
    const sortingFielf = "SellPrice";
    const sorting = this.state.Itemcard.slice(0,number).sort(function(a, b){
      return a[sortingFielf] - b[sortingFielf]
    });
    this.setState({ 
      Itemcard : sorting
    });
  }
  //구매순
  _sortBuyCount = () =>{
    const number = this.state.Itemcard.length;
    const sortingFielf = "BuyCount";
    const sorting = this.state.Itemcard.slice(0,number).sort(function(a, b){
      return b[sortingFielf] - a[sortingFielf]
    });
    this.setState({ 
      Itemcard : sorting
    });
  }

  filterDeliveryControl = () =>{
    const toggle =  (this.state.filterDelivery) ? false : true;
    this.setState({ 
      filterDelivery: toggle
    });

    if(!this.state.filterDelivery){
      this._sortfreeDelivery()
    }else{
      this._sortfreeDelivery2()
    }
  }

  //무료배송
	_sortfreeDelivery = () => {
    const number = this.state.Itemcard.length;
    
    const itemFreeDeliveryLists = this.state.Itemcard.slice(0,number).filter( x => {
      return x.Delivery.DeliveryText === "무료배송"
    });
    this.setState({
      Itemcard : itemFreeDeliveryLists,
      ItemcardBasic : this.state.Itemcard
    });
  }

  _sortfreeDelivery2 = () => {
    this.setState({ 
      Itemcard : this.state.ItemcardBasic
    });
  }

  filterFavorControl = () =>{
    const toggle =  (this.state.filterfavor) ? false : true;
    this.setState({ 
      filterfavor: toggle
    });

    if(!this.state.filterfavor){
      this._sortfreeFavor()
    }else{
      this._sortfreeFavor2()
    }
  }

  //관심상품
  _sortfreeFavor = () => {
    const number = this.state.Itemcard.length;
    
    const itemFreeFavorLists = this.state.Itemcard.slice(0,number).filter( x => {
      return x.IsFavoriteSeller === true
    });
    this.setState({
      Itemcard : itemFreeFavorLists
    });
  }

  _sortfreeFavor2 = () => {
    this.setState({ 
      Itemcard : this.state.ItemcardBasic
    });
  }

  addFavorite = (ranking) => {
    const cahngeFavorite = this.state.Itemcard;
    const index = this.state.Itemcard.findIndex(todo => todo.ranking === ranking);
    
    cahngeFavorite[index].IsFavoriteSeller = cahngeFavorite[index].IsFavoriteSeller ? false : true;
    
    this.setState({ 
      Itemcard : cahngeFavorite
    });
  
  }
    render() {
      const addFavorite = this.addFavorite
      // console.log(this.state.Itemcard) //아이템카드 데이터 정렬
      // console.log(this.state.ItemcardBasic)
        return (
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
                      {this.renderItem(addFavorite)}
                    </div>
                  </div>
                </div>
                <Filter filterToggle={this.state.filterToggle} filterOnChange={this.filterToggle} viewtypeState={this.state.viewtype} viewtypeChange={this._viewTypeChange} filterDeliveryControl={this.filterDeliveryControl} filterFavorControl={this.filterFavorControl} />
              </div>
            </div>
        );
    }
}

export default Listpage;
