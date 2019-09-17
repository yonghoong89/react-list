import React, { Component } from 'react';

const Category =({length, filterToggle,optionLayer,adLayer,optionLayerToggle,adLayerToggle,sortingChange1,sortingChange2,sortingChange3,renderList}) =>{


    return(
        <div className="section--search_relative_information section--content_information_bar_container">
            <div className="text--search_result">
                <span className="text--item_count result--text_color">{length}</span><span className="text--description"><em className="result--text_color">개</em>의 검색 결과</span>
            </div>
            <div className="section--select_information">
                <div className="section--select_option">
                    <button type="button" className="link--button_sort" onClick={optionLayerToggle}>정렬</button>
                    <div className={optionLayer ? "sort--option_box on" : "sort--option_box"}>
                        <ul className="sort--option_select">
                            <li className={renderList[0] ? "item item--active" : "item"}>
                                <a href="#" className="link" onClick={sortingChange1}>옥션랭킹순</a>
                                <button type="button" className="button--notification_advertisement" onClick={adLayerToggle}>광고포함</button>
                                <span className={adLayer ? "section--notification_advertisement on" : "section--notification_advertisement"}>
                                    <span className="text--notification_advertisement">
                                    옥션랭킹순은 광고구매여부, 판매실적, 검색정확도, 고객이용행태, 서비스 품질 등을 기준으로 정렬됩니다.
                                    찬스쇼핑, 파워클릭 영역은 광고입찰가순으로 전시됩니다.
                                    </span>
                                </span>
                            </li>
                            <li className={renderList[1] ? "item item--active" : "item"}><a href="#" className="link" onClick={sortingChange2}>낮은 가격순</a></li>
                            <li className={renderList[2] ? "item item--active" : "item"}><a href="#" className="link" onClick={sortingChange3}>구매순</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <button type="button" className="link--button_filter link_active" onClick={filterToggle}>필터</button>
        </div>
    )
}

export default Category;
