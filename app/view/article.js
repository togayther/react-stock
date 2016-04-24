import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ArticleAction from '../action/article';

class ArticleApp extends React.Component {

  constructor () {
    super(); 
  }

  componentDidMount(){
    this.props.productAction.fetchProducts();
  }

  render() {

    return (

                <div>
                  article detail
                </div>  
    );
  }
}

export default connect(state => ({
  article : state.article
}), dispatch => ({ 
  articleAction : bindActionCreators(ArticleAction, dispatch)
}))(ArticleApp);

