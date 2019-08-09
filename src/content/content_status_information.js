import React, { Component } from 'react';

class Content_status_information extends Component {
    render() {
        return (
          <div className="section--module_wrap">
              <Information__keyword />
              <Information__bar />
              <Selected__keyword />
          </div>
        );
    }
}


class Information__keyword extends Component {
  render() {
      return (
        <div className="section--search_relative_information section--relative_keywords_container">
          <h3 className="text--region_title">검색결과안내</h3>
            <div className="section--sub_category type_lp">
                <ul className="list--sub_category_keywords">
                    <li className="item"><a href="#" className="link on">전체</a></li>
                    <li className="item"><a href="#" className="link">샤오미 선풍기</a></li>
                    <li className="item"><a href="#" className="link">휴대용 선풍기</a></li>
                    <li className="item"><a href="#" className="link">탁상용&amp;핸디 선풍기</a></li>
                    <li className="item"><a href="#" className="link">써큘레이터1</a></li>
                    <li className="item"><a href="#" className="link">써큘레이터2</a></li>
                </ul>
            </div>
        </div>
      );
  }
}

class Information__bar extends Component {

  state = {
    layerAlign: '',
    layerFliter: ''
  }

  _layerAlign = () =>{
    console.log('레이어오픈')
    if(this.state.layerAlign === 'active') { 
      this.setState({layerAlign:''})
    }else {
      this.setState({layerAlign:'active'})
    }
  }

  _layerFilter = () =>{
    console.log('레이어오픈')
    if(this.state.layerFliter === 'active') { 
      this.setState({layerFliter:''})
    }else {
      this.setState({layerFliter:'active'})
    }
  }

  render() {
      return (
        <div className="section--search_relative_information section--content_information_bar_container">
          <div className="text--search_result">
              <span className="text--item_count result--text_color">56,537</span><span className="text--description"><em className="result--text_color">개</em>의 검색 결과</span>
          </div>
          <div className="section--select_information">
              <div className="section--select_option">
                  <button type="button" onClick={this._layerAlign} className="link--button_sort">정렬</button>
                  <div className={`sort--option_box ${this.state.layerAlign === "active"? 'on': ''}`}>
                      <ul className="sort--option_select">
                          <li className="item">
                              <a href="#" className="link">옥션랭킹순</a><button type="button" className="button--notification_advertisement">광고포함</button>
                              <span className="section--notification_advertisement">
                                  <span className="text--notification_advertisement">
                                  옥션랭킹순은 광고구매여부, 판매실적, 검색정확도, 고객이용행태, 서비스 품질 등을 기준으로 정렬됩니다.
                                  찬스쇼핑, 파워클릭 영역은 광고입찰가순으로 전시됩니다.
                                  </span>
                              </span>
                          </li>
                          <li className="item"><a href="#" className="link">판매인기순</a></li>
                          <li className="item item--active"><a href="#" className="link">낮은가격순</a></li>
                          <li className="item"><a href="#" className="link">만족도높은순</a></li>
                          <li className="item"><a href="#" className="link">신규등록순</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <button type="button" className="link--button_filter link_active">필터</button>
      </div>
      );
  }
}

class Selected__keyword extends Component {
  render() {
      return (
        <div className="section--search_relative_information section--selected_keywords_container">
          <div className="component--filter">
              <h3 className="text--region_title">필터검색결과안내</h3>
              <div className="section--selected_keywords">
                  <ul className="list--selected_keywords filter_result">
                      <li className="item"><a href="#" className="link">써큘레이터<span className="ir">닫기</span></a></li>
                      <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
                      <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
                      <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
                      <li className="item"><button type="button" className="button__reset"><span className="ir">새로고침</span></button></li>
                  </ul>
              </div>
          </div>                                                            
      </div>
      );
  }
}


// const Update_time = ({  }) => {
//   return(
//     <div className="section--search_relative_information section--relative_keywords_container"></div>
//   )
// }


export default Content_status_information;