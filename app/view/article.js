import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Container from '../component/container';
import * as ArticleAction from '../action/article';
import ArticleItem from '../component/article_item';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter
} from 'react-weui';

class ArticleApp extends React.Component {

  constructor () {
    super(); 
  }

  componentDidMount(){
    this.props.articleAction.fetchArticles();
  }

  renderArticleList(){
    let { articles } = this.props;

    return (
      <Panel access>
          <PanelBody>
              {
                (articles && articles.results && articles.results.length>0) ?
                articles.results.map((article, index) =>  
                  <ArticleItem article={ article } key={ index }/>
                )
                :
                <div className="text-empty">
                  暂无数据
                </div>
              }
          </PanelBody>
        </Panel>
    );
  }

  render() {

    let articleList = this.renderArticleList();

    return (
      <Container 
        titleEnabled = { true }
        titleText = { '策略热文' }
        returnEnabled = { true }
        menuEnabled = { false }
        sidebarEnabled = { true }>
          
          { articleList }

        </Container>
    );
  }
}

export default connect(state => ({
  articles : state.article
}), dispatch => ({ 
  articleAction : bindActionCreators(ArticleAction, dispatch)
}))(ArticleApp);

