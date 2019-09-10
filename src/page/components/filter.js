import React, { Component } from 'react';

const Filter =({filterToggle,filterOnChange, viewtypeState, viewtypeChange}) =>{

    return(
        <div id="region--content_filter" className={filterToggle ? "" : "js-filter--fixed"}>
            <div className="section--module_wrap" module-design-id="2027">
    </div>  
            <div className="section--module_wrap">
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
        <div className="component--filter">
<h3 className="text--region_title">필터검색결과안내</h3>
<div className="section--selected_keywords_pannel">
    <ul className="list--selected_keywords_pannel filter_result">
        <li className="item"><a href="#" className="link">써큘레이터<span className="ir">닫기</span></a></li>
        <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
        <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
        <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
        <li className="item"><button type="button" className="button__reset"><span className="ir">새로고침</span></button></li>
    </ul>
</div>
</div>
    </div>
    <div className="section--module_wrap">
        <div className="component component--filter static name--recommend"> 
        <p className="text--filter_guide">고객님들이 많이 찾는 검색조건입니다.</p>
    <div className="filter_content">
        <ul className="list--recommend_filter">
            <li className="item--list item--type_category"><a href="#section--category" className="item--link">(계절가전)스탠드형 선풍기</a></li>
            <li className="item--list item--type_category"><a href="#section--category" className="item--link">(계절가전)스탠드형 선풍기 온풍기온풍기온풍기 온풍기온풍기온풍기</a></li>
            <li className="item--list item--type_brand"><a href="#section--brand" className="item--link">오뚜기</a></li>
            <li className="item--list item--type_brand"><a href="#section--brand" className="item--link">파스퇴르</a></li>
            <li className="item--list item--type_brand"><a href="#section--brand" className="item--link">풀무원</a></li>
            <li className="item--list item--type_brand"><a href="#section--brand" className="item--link">파스퇴르</a></li>
            <li className="item--list item--type_pp"><a href="#section--store" className="item--link">현대백화점</a></li>   
            <li className="item--list item--type_option"><a href="#section--option" className="item--link">색상</a></li>                   
        </ul>
    </div>

</div>
    </div>
    <div className="section--module_wrap">          
        <div className="component component--filter type-simple name--select_delivery"> 
<div className="filter_content">
<div className="section--checkbox_form">
    <input type="checkbox" name="smiledelivery" id="check--smiledelivery" className="custom_form--checkbox" />
    <label for="check--smiledelivery" className="custom_form--label"><span className="ico">스마일배송</span></label>
    <input type="checkbox" name="smiledelivery" id="check--delivery_free" className="custom_form--checkbox" />
    <label for="check--delivery_free" className="custom_form--label">무료배송</label>
</div>
</div>
</div>
    </div>
    <div className="section--module_wrap"> 
        <div className="component component--filter type-toggle name--brand " id="section--brand"> 
<div className="filter_content">
    <button className="button--filter_toggle"><span className="filter--toggle-title">브랜드</span><span className="filter--toggle-stitle">계절가전,계절가전,계절가전,계절가전,계절가전,계절가전</span></button>                
    <div className="section--category_group">
        <ul className="list--category">
<li className="list--item">
    <a href="#" className="link--category">
        <input type="checkbox" name="checkbox-check-01" id="checkbox-check-01" className="custom_form--checkbox" />
        <label for="checkbox-check-01" className="custom_form--label">PC 1depth 123 dsadsadsad fsafsad</label>
    </a>
</li>
<li className="list--item">
    <a href="#" className="link--category">
        <input type="checkbox" name="checkbox-check-02" id="checkbox-check-02" className="custom_form--checkbox" />
        <label for="checkbox-check-02" className="custom_form--label">PC  123 dsadsadsad fsafsad</label>
    </a>
</li>                            
<li className="list--item button">
    <button className="button--show_more_filter_as_each_item">더보기</button>
</li>
</ul>                     
    </div>
</div>                
</div>

    
    </div>    

    <div className="section--module_wrap"> 
        <div className="component component--filter type-toggle name--store " id="section--store"> 
<div className="filter_content">
    <button className="button--filter_toggle"><span className="filter--toggle-title">백화점</span><span className="filter--toggle-stitle">현대백화점</span></button>                
    <div className="section--category_group">
        <ul className="list--category">
<li className="list--item">
    <div className="link--category">
        <div className="name--store--flexbox">
            <input type="checkbox" name="store-check-01" id="store-check-01" className="custom_form--checkbox" />
            <label for="store-check-01" className="custom_form--label"><span className="includ_coupon ellipsis">갤러리아 백화점</span></label><button className="button--store_dc_coupon">30% 쿠폰<span className="ico"></span></button>
        </div>
    </div>
</li>                        
<li className="list--item">
    <div className="link--category">
        <div className="name--store--flexbox">
            <input type="checkbox" name="store-check-02" id="store-check-02" className="custom_form--checkbox" />
            <label for="store-check-02" className="custom_form--label"><span className="ellipsis">현대백화점 현대백화점</span></label><button className="button--store_dc_coupon">7% 쿠폰<span className="ico"></span></button>
        </div>
    </div>
</li>
<li className="list--item">
    <div className="link--category">
        <div className="name--store--flexbox">
            <input type="checkbox" name="store-check-03" id="store-check-03" className="custom_form--checkbox" />
            <label for="store-check-03" className="custom_form--label nocoupon"><span className="ellipsis">현대백화점 현대백화점 현대백화점</span></label>
        </div>
    </div>
</li>
<li className="list--item button">
    <button className="button--show_more_filter_as_each_item">더보기</button>
</li>
</ul>                     
    </div>
</div>                
</div>


    </div>            

    <div className="section--module_wrap"> 
        <div className="component component--filter type-toggle name--option_color " id="section--option"> 
<div className="filter_content">
    <button className="button--filter_toggle"><span className="filter--toggle-title">색상</span><span className="filter--toggle-stitle">초록색, 금색, 주황색</span></button>                
    <div className="section--category_group">
        <ul className="list--category">
<li className="list--item">
    <a href="#" className="link--category">
        <input type="checkbox" name="color-check-01" id="color-check-01" className="custom_form--checkbox" />
        <label for="color-check-01" className="custom_form--label"><span className="color--chip"></span>초록색</label>
    </a>
</li>                        
<li className="list--item">
    <a href="#" className="link--category">
        <input type="checkbox" name="color-check-02" id="color-check-02" className="custom_form--checkbox" />
        <label for="color-check-02" className="custom_form--label"><span className="color--chip"></span>흰색</label>
    </a>
</li>                                                    
<li className="list--item button">
    <button className="button--show_more_filter_as_each_item">더보기</button>
</li>
</ul>                     
    </div>
</div>                
</div>


    </div>    

    <div className="section--module_wrap"> 
        <div className="component component--filter type-toggle name--option " id="section--option"> 
<div className="filter_content">
    <button className="button--filter_toggle"><span className="filter--toggle-title">용량</span><span className="filter--toggle-stitle">1~4 인용</span></button>                
    <div className="section--category_group">
        <ul className="list--category">
<li className="list--item">
    <a href="#" className="link--category">
        <input type="checkbox" name="option-check-01" id="option-check-01" className="custom_form--checkbox" />
        <label for="option-check-01" className="custom_form--label">1~4인용</label>
    </a>
</li>                        
<li className="list--item button">
    <button className="button--show_more_filter_as_each_item">더보기</button>
</li>
</ul>                     
    </div>
</div>                
</div>


    </div>        
    <div className="section--module_wrap"> 
        <div className="component component--filter type-toggle name--price " id="section--price"> 
<div className="filter_content">
    <button className="button--filter_toggle"><span className="filter--toggle-title">가격대 (UI 확인용)</span><span className="filter--toggle-stitle"></span></button>                
    <div className="section--category_group">
        
<div className="section--price mockup">
<div className="price_container">
    <h4 className="text--region_title">가격대 금액 설정</h4>           
    <div className="row">
        <div className="col-sm-12">
        <div id="slider-range"></div>
        </div>
    </div>
    <div className="row slider-labels">                     
        <div className="col-xs-6 caption">
        <span id="slider-range-value1"></span> <span className="text--money">원</span>
        </div>
        <span className="range-mark">~</span>
        <div className="col-xs-6 text-right caption">
         <span id="slider-range-value2"></span> <span className="text--money">원</span>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-12">
        <form>
            <input type="hidden" name="min-value" value="" />
            <input type="hidden" name="max-value" value="" />
        </form>
        </div>
    </div>
</div>
<button type="button" className="button--filter_price "><span className="ir">적용하기</span></button>    

</div>                     
    </div>
</div>                
</div>


    </div>                        
    <div className="section--module_wrap"> 
        <div className="component component--filter type-toggle name--price " id="section--price"> 
<div className="filter_content">
    <button className="button--filter_toggle"><span className="filter--toggle-title">가격대 (개발용)</span><span className="filter--toggle-stitle"></span></button>                
    <div className="section--category_group">
        
<div className="section--price">

<div className="section--price_graph">
    <button type="button" className="slider--range_circle mini"><span className="ir">최소금액 설정바</span></button>
    <button type="button" className="slider--range_circle max"><span className="ir">최대금액 설정바</span></button>
    <div className="price--slider case_min-max">                
        <div className="slider--range_track"></div>
    </div>
</div>
<div className="section--price_form">
    <span className="price--input_box" />
        <label for="min_price">최소금액</label>
        <input type="number" id="min_price" placeholder="최소금액" name="minPrice" value="최소금액" />
        <span className="text--money">원</span>
    
    <span className="text--hyphen">~</span>
    <span className="price--input_box" />
        <label for="max_price">최대금액</label>
        <input type="number" id="max_price" placeholder="최대금액" name="maxPrice" value="최대금액" />
        <span className="text--money">원</span>
    
    <button type="button" className="button--filter_price "><span className="ir">적용하기</span></button>
</div>

</div>                     
    </div>
</div>                
</div>


    </div>                

    <div className="section--module_wrap"> 
        <div className="component component--filter type-static name--search"> 
<div className="filter_content">
<div className="section--search_form">
    <input type="text" title="결과내 재검색어 입력폼" placeholder="결과내 재검색" />
    <button className="button--search_result"><span className="ir">검색</span></button>
</div>
</div>
</div>            
    </div>
    <div className="section--module_wrap"> 
        <button type="button" className="button__filter_reset"><span className="ir">필터 초기화</span></button>
    </div>

    <div className="section--filter_close">
            <button type="button" className="button--close_filter_container"><span className="button--close_text" onClick={filterOnChange}>닫기</span></button>
        </div>

</div>    
</div>
                    
        </div>
    </div>

    )
}

  



export default Filter;
