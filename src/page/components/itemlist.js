import React, { Component } from 'react';



const Itemlist =({GoodsCode, ImageURL, BrandName, GoodsName, SalePrice, DeliveryText, DeliveryInfo, BuyCount, addCart, IsFavoriteSeller, keyValue, addFavorite}) =>{
    console.log(IsFavoriteSeller)
    return(

        <div className="component component--item_card type--general" key={keyValue}>
            <div className="itemcard">
                <div className="section--itemcard_box">
                        <div className="section--itemcard">
                            <div className="itemcard--inner">
                                <a href={GoodsCode} className="link--itemcard">
                                    <span className="section--itemcard_img">
                                        <img src={ImageURL} className="image--itemcard" alt="" />
                                    </span>
                                    <span className="section--itemcard_info">
                                        <span className="area--itemcard_title">
                                            <span className="text--brand">{BrandName}</span>
                                            <span className="text--title">{GoodsName}</span>
                                        </span>
                                        <span className="area--itemcard_price">
                                            <span className="price_seller">
                                                <strong className="text--price_seller">{SalePrice}</strong><span className="text--unit">원</span>
                                            </span>
                                        </span>
                                        <span className="section--itemcard_info_add">
                                            <span className="text--addinfo">{DeliveryInfo}</span>
                                            <span className="text--addinfo">{DeliveryText}</span>
                                        </span>
                                        <span className="section--itemcard_info_score">
                                            <span className="score--buycnt">
                                                <span className="text--buycnt">구매</span><span className="text--buycnt__num">{BuyCount}</span><span className="ir">건</span>
                                            </span>
                                            <span className="score--awards">
                                                <span className="ir">만족도</span><span className="text--awards">4.8</span><span className="ir">점</span>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                                <button className={IsFavoriteSeller ? "button--favorite on" : "button--favorite"} onClick={() => addFavorite(keyValue)}><span className="icon--favorite"><span className="ir">관심상품 등록하기</span></span></button>                                                                                                                                                                                                            
                                <button className="button--cart element-info-cart" onClick={addCart}><span className="icon--cart"><span className="ir">장바구니담기</span></span></button>
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
    )
}

export default Itemlist;
