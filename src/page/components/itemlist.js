import React, { Component } from 'react';



const Itemlist =({GoodsCode, ImageURL, BrandName, GoodsName, SellPrice, DeliveryText, DeliveryInfo, BuyCount, addCart, IsFavoriteSeller, ranking, addFavorite}) =>{
    console.log(IsFavoriteSeller)
    return(

        <div className="component component--item_card type--general" key={ranking}>
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
                                                <strong className="text--price_seller">{SellPrice}</strong><span className="text--unit">원</span>
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
                                        </span>
                                    </span>
                                </a>
                                <button className={IsFavoriteSeller ? "button--favorite on" : "button--favorite"} onClick={() => addFavorite(ranking)}><span className="icon--favorite"><span className="ir">관심상품 등록하기</span></span></button>                                                                                                                                                                                                            
                            </div>
                        </div>
                    </div>
            </div>  
        </div>
    )
}

export default Itemlist;
