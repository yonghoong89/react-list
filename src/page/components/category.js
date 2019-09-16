import React, { Component, Fragment } from 'react';

class Toggle extends Component {
    state = {
        isToggleOn: true, //정렬 토클
        isToggleOn2: true, //정렬내 광고 토클
        solt: [true,false,false,false],
        isToggleOn4: true,
    };

    handleClick = () =>{
        const toggle =  (this.state.isToggleOn) ? false : true;
        this.setState({ 
            isToggleOn: toggle
        });
    }

    handleClick2 = () =>{
        const toggle =  (this.state.isToggleOn2) ? false : true;
        this.setState({ 
            isToggleOn2: toggle
        });
    }

    solt1 = () =>{
        this.setState({ 
            solt: [true,false,false,false],
        });
    }

    solt2 = () =>{
        this.setState({ 
            solt: [false,true,false,false],
        });
    }

    solt3 = () =>{
        this.setState({ 
            solt: [false,false,true,false],
        });
    }

    solt4 = () =>{
        this.setState({ 
            solt: [false,false,false,true],
        });
    }
   
   
    render() {
      return (
          <Fragment>
            <button type="button" className={this.state.isToggleOn ? "link--button_sort on" : "link--button_sort"} onClick={this.handleClick}>정렬</button>
            <div className={this.state.isToggleOn ? "sort--option_box" : "sort--option_box on"}>
                <ul className="sort--option_select">
                    <li className={this.state.solt[0] ? "item item--active" : "item"}>
                        <a href="#" className="link" onClick={this.solt1}>옥션랭킹순</a><button type="button" className="button--notification_advertisement" onClick={this.handleClick2}>광고포함</button>
                        <span className={this.state.isToggleOn2 ? "section--notification_advertisement" : "section--notification_advertisement on"}>
                            <span className="text--notification_advertisement">
                            옥션랭킹순은 광고구매여부, 판매실적, 검색정확도, 고객이용행태, 서비스 품질 등을 기준으로 정렬됩니다.
                            찬스쇼핑, 파워클릭 영역은 광고입찰가순으로 전시됩니다.
                            </span>
                        </span>
                    </li>
                    <li className={this.state.solt[1] ? "item item--active" : "item"}><a href="#" className="link" onClick={this.solt2}>낮은가격순</a></li>
                    <li className={this.state.solt[2] ? "item item--active" : "item"}><a href="#" className="link" onClick={this.solt3}>높은가격순</a></li>
                    <li className={this.state.solt[3] ? "item item--active" : "item"}><a href="#" className="link" onClick={this.solt4}>높은구매순</a></li>
                </ul>
            </div>
        </Fragment>
      );
    }

  }

const Category =({length, filterToggle}) =>{

    return(
        <div className="section--search_relative_information section--content_information_bar_container">
            <div className="text--search_result">
                <span className="text--item_count result--text_color">{length}</span><span className="text--description"><em className="result--text_color">개</em>의 검색 결과</span>
            </div>
            <div className="section--select_information">
                <div className="section--select_option">
                    <Toggle />
                </div>
            </div>
            <button type="button" className="link--button_filter link_active" onClick={filterToggle}>필터</button>
        </div>
    )
}



export default Category;
