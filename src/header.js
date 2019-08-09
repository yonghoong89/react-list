import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <header id="header">
            <div className="bx_hd_blank"></div>
            <div className="header_wrap header_fix">
              <h1 className="h_logo">
                <a href="#" className="sp_hd">옥션</a>
              </h1>
              <a href="#" className="btn_search sp_hd">검색</a>
              <div id="search_box" className="search_box focus">
                <div className="inp_seach">
                    <input type="text" id="keyword" className="inp search-box_text-field"></input>
                    <button type="button" className="btn_del sp_hd">삭제</button>
                </div>
                <button type="submit" className="btn_sch_submit sp_hd">검색</button>
                <div className="keyword_swipe">
                    <ul>
                        <li><span><button className="word">파스타</button><button className="del sp_hd">삭제</button></span></li>
                        <li><span><button className="word">소스</button><button className="del sp_hd">삭제</button></span></li>
                        <li><span><button className="word">이탈리안</button><button className="del sp_hd">삭제</button></span></li>
                        <li><span><button className="word">포크</button><button className="del sp_hd">삭제</button></span></li>
                        <li><span><button className="word">파마산치즈</button><button className="del sp_hd">삭제</button></span></li>
                        <li><span><button className="word">생크림</button><button className="del sp_hd">삭제</button></span></li>
                        <li><span><button className="word">휘핑크림</button><button className="del sp_hd">삭제</button></span></li>
                        <li className="inp_blank search-box_text-field">검색</li>
                    </ul>
                </div>
                <a href="#" className="btn_sch_cancel sp_hd search-box_button--cancel">취소</a>
              </div>
              <a href="#" className="btn_cart sp_hd">장바구니<em className="cart_num">99</em></a>
            </div>
          </header>
        );
    }
}

export default Header;
