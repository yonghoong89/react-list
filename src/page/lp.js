import React, { Component, Fragment } from 'react';
import Header from './components/header';
import Keyword from './components/keyword';
import Category from './components/category';
import Itemlist from './components/itemlist';

class Listpage extends Component {
    render() {
        return (
          <Fragment>
           <Header/>
            <div id="content" className="state--content_view_type__list">
              <div className="section--content_body_container">
                <Keyword />
                <Category />
                <div className="region--content_body">
                  <div id="section--inner_content_body_container">
                    <div className="component component--item_card type-smiledelivery element-info">
                      <Itemlist />        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}

export default Listpage;
