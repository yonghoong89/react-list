import React, { Component, Fragment } from 'react';
import Header from './components/header';
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
    adLayer:false,
    test:1
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

  renderItem = () =>{
    const number = this.state.Itemcard.length;
    const items = this.state.Itemcard.slice(0,number).map((Itemcard,index)=> <Itemlist GoodsCode={Itemcard.GoodsCode}
      ImageURL={Itemcard.ImageURL}
      BrandName={Itemcard.BrandName}
      GoodsName={Itemcard.GoodsName}
      SalePrice={Itemcard.SalePrice}
      DeliveryText={Itemcard.Delivery.DeliveryText}
      DeliveryInfo={Itemcard.Delivery.DeliveryInfo}
      BuyCount={Itemcard.BuyCount}
      key={index}
      keyValue={index}
      addCart={this.addCart}
      addFavorite={this.addFavorite}
      IsFavoriteSeller ={Itemcard.IsFavoriteSeller}
      />
    );
  
    return items
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
  _soltBuyCount = () =>{
    const soltingFielf = "BuyCount";
    const solting = this.state.Itemcard.sort(function(a, b){
      return b[soltingFielf] - a[soltingFielf]
    });
    this.setState({ 
      Itemcard : solting
    });
  }

  addFavorite = (keyValue) =>{
    console.log(this.state.Itemcard[keyValue].IsFavoriteSeller)
    
    if(this.state.Itemcard[keyValue].IsFavoriteSeller){
      alert('관심상품에 제거되었습니다.')
      // this.setState({ 
      //   IsFavoriteSeller : false
      // });
    }else{
      alert('관심상품에 추가되었습니다.')
    }
  }

  addCart = () =>{
    alert('장바구니에 추가되었습니다')
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
    this._soltBuyCount();
  }

  renderList = () =>{
    if(this.state.renderList=="rank"){
      alert('test')
    }
  }

    render() {
      
      console.log(this.state.Itemcard) //아이템카드 데이터 정렬1
      console.log(this.state.ItemcardLowPrice) //솔팅 가격낮은
      console.log(this.state.filterToggle) //하위에서 올라온 상위컴포넌트 변경확인
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
                      {this.renderItem()}
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
