import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as validator from '../common/validator';

class LoginApp extends React.Component {

  constructor () {
    super();
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  
  componentDidMount(){
    
  }

  componentDidUpdate(){
    
  }

  validateLoginData(){
    
  }

  renderAccountField(){
    
  }
  renderRegisterField(){
    
  }

  handleLoginClick(){

  }

  handleCaptchaClick(){
      
  }

  render() {

    return (
         
              <div id="login-panel">
                  login 
              </div>
    );
  }
}

export default connect(state => ({
  
}), dispatch => ({
  
}))(LoginApp);
