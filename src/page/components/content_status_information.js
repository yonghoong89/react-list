import React, { Component } from 'react';

class Content_status_information extends Component {
    render() {
        return (
          <div className="section--module_wrap">
              <Information__keyword />
              {/* <Information__bar /> */}
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
