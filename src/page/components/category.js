import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="section--search_relative_information section--content_information_bar_container">
                <div className="text--search_result">
                    <span className="text--item_count result--text_color">56,537</span><span className="text--description"><em className="result--text_color">개</em>의 검색 결과</span>
                </div>
                <div className="section--select_information">
                    <div className="section--select_option">
                        <button type="button" className="link--button_sort">정렬</button>
                        <div className="sort--option_box">
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
        )
    }
}

export default Category;
