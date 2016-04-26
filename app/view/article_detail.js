import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ArticleAction from '../action/article';
import Container from '../component/container';

import {
    Article
} from 'react-weui';


class ArticleDetailApp extends React.Component {

  constructor () {
    super(); 
  }

  componentDidMount(){
    this.getArticleInfo();
  }

  getArticleInfo(){
    let id = this.props.location.query.id;

    let { articles } = this.props;

    let articleInfo = null;

    if(articles && articles.results && articles.results.length){
      for(let i =0 ,len = articles.results.length; i < len; i++){
        let articleItem = articles.results[i];
        if (articleItem.id === id) {
          articleInfo = articleItem;
          break;
        }
      }
    }

    return articleInfo;
  }


  render() {

    let articleInfo = this.getArticleInfo();

    return (
      <Container 
      titleEnabled = { true }
      returnEnabled = { true }
      menuEnabled = { false }
      sidebarEnabled = { true }>
        
        <Article>
            <section>
                <h2 className="title">{ articleInfo.title }</h2>
                <section>
                    <div>
                      { articleInfo.content }
                    </div>
                </section>
            </section>
        </Article>

      </Container>
    );
  }
}

export default connect(state => ({
  articles : state.article
}), dispatch => ({ 
  articleAction : bindActionCreators(ArticleAction, dispatch)
}))(ArticleDetailApp);

