import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as RecommendAction from '../action/recommend';

class RecommendApp extends React.Component {

  constructor () {
    super(); 
  }

  componentDidMount(){
    this.props.productAction.fetchProducts();
  }

  render() {

    return (
      <div>
        recommend list 
      </div>  
    );
  }
}

export default connect(state => ({
  recommend : state.recommend
}), dispatch => ({ 
  recommendAction : bindActionCreators(RecommendAction, dispatch)
}))(RecommendApp);

