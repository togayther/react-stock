import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Carousel  from 'nuka-carousel';
import Container from '../component/container';

import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter
} from 'react-weui';

class AccountApp extends React.Component {

  constructor () {
    super(); 
  }

  componentDidMount(){
    
  }


  render() {

    return (
      <Container { ...this.props}
        titleEnabled = { true }
        titleText = { '开户' }
        menuEnabled = { true }
        sidebarEnabled = { true }>

          <div className="text-empty">
            开户宣传页面
          </div>

        </Container>
    );
  }
}

export default connect(state => ({

}), dispatch => ({ 

}))(AccountApp);

