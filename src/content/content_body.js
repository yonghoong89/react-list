import React, { Component } from 'react';

class Content_body extends Component {
    render() {
        return (
          <div className="region--content_body">
              <div id="section--inner_content_body_container">
                <Section__module />
              </div>
          </div>
        );
    }
}


class Section__module extends Component {
  render() {
      return (
        <div className="component component--item_card type-smiledelivery element-info">
            <div className="itemcard">            
                <div className="section--itemcard_box">                                              
                    <div className="section--itemcard">
                        <div className="section--component_title">
                            <a className="section--banner_link" href="#"><span className="ir">스마일배송</span><span className="section--banner_text">오늘주문 내일도착</span></a>
                        </div>                    
                        <div className="itemcard--inner">
                            <a href="#" className="link--itemcard">
                                <span className="section--itemcard_img">
                                    <img src="http://image.auction.co.kr/itemimage/41/b0/8c/41b08cc27.jpg" className="image--itemcard" alt="" />
                                </span>
                                <span className="section--itemcard_info">
                                    <span className="area--itemcard_title">
                                        <span className="text--brand">오난코리아</span>
                                        <span className="text--title">루메나 N9-FAN STAND 서큘레이터</span>
                                    </span>
                                    <span className="area--itemcard_price">
                                        <span className="price_seller">
                                            <strong className="text--price_seller">2,600</strong><span className="text--unit">원</span>
                                        </span>
                                    </span>
                                    <span className="section--itemcard_info_add">
                                        <span className="text--addinfo">무료배송</span>
                                        <span className="text--addinfo">스마일배송</span>                                               
                                    </span>
                                    <span className="section--itemcard_info_score">
                                        <span className="score--buycnt">
                                            <span className="text--buycnt">구매</span><span className="text--buycnt__num">9,999</span><span className="ir">건</span>
                                        </span>
                                        <span className="score--awards"><span className="ir">만족도</span><span className="text--awards">4.8</span><span className="ir">점</span></span>                                                
                                    </span>
                                </span>                    
                            </a>
                            <button className="button--favorite"><span className="icon--favorite"><span className="ir">관심상품 등록하기</span></span></button>                                                                                                                                                                                                            
                            <button className="button--cart element-info-cart"><span className="icon--cart"><span className="ir">장바구니담기</span></span></button>                
                        </div>
                        <span className="section--related_item">
                            <span className="related--item_info">
                                <span className="text--info_title">사용면적</span><span className="text--info_parameter">39.6m</span>
                                <span className="text--info_title">필터</span><span className="text--info_parameter">프리퀄필터, 탈취필터</span>
                            </span>
                            <span className="related--item_button">
                                <button className="button--related_item"><span className="text--related"><span className="text--related__01">연관</span><span className="text--related__02">상품</span></span><span className="text--num">6개</span></button>
                            </span>
                        </span>                                                                        
                    </div>
                </div>
            </div>        
        </div>
      );
  }
}

export default Content_body;
