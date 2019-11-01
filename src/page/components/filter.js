import React, { Component } from 'react';

const Filter =({filterToggle, filterOnChange, viewtypeState, viewtypeChange, filterDeliveryControl}) =>{
    return(

    <div id="region--content_filter" className={filterToggle ? "js-filter--fixed" : ""}>
        <div className="section--content_filter_container">
            <div className="content--filter_top">
                <h3 className="text--filter_title">상세검색</h3>
            </div>
            <div className="section--content_scroll_content">
                <div className="section--select_view_type">
                    <h4 className="text--text--filter_title">상품보기 방식</h4>
                    <button className={viewtypeState[0] ? "button--type_gallery_view on" : "button--type_gallery_view"} onClick={viewtypeChange}><span className="ir">갤러리뷰 보기</span></button>
                    <button className={viewtypeState[1] ? "button--type_list_view on" : "button--type_list_view"} onClick={viewtypeChange}><span className="ir">리스트뷰 보기</span></button>
                </div>    
                <div className="section--module_wrap">
                    <div className="component component--filter type-simple name--select_delivery"> 
                        <div className="filter_content">
                            <div className="section--checkbox_form">
                                <input type="checkbox" name="smiledelivery" id="check--delivery_free" className="custom_form--checkbox" />
                                <label htmlFor="check--delivery_free" className="custom_form--label" onClick={filterDeliveryControl} >무료배송</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section--filter_close">
                    <button type="button" className="button--close_filter_container"><span className="button--close_text" onClick={filterOnChange}>닫기</span></button>
                </div>
            </div>
        </div>
    </div>

    )
}


export default Filter;
