import React, { Component } from 'react';
import Content_status_information from './content/content_status_information';
import Content_body from './content/content_body';

class Content extends Component {
    render() {
        return (
          <div id="content" className="state--content_view_type__list">
            <div className="section--content_body_container">
              <Content_status_information />
              <Content_body />
            </div>
          </div>
        );
    }
}

export default Content;
