import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ArticleAction from '../action/article';
import * as RecommendAction from '../action/recommend';

import Container from '../component/container';
import ArticleItem from '../component/article_item';
import RecommendItem from '../component/recommend_item';


import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter
} from 'react-weui';


class HomeApp extends React.Component {

  constructor () {
    super(); 
  }

  componentDidMount(){
    this.props.articleAction.fetchArticles();
    this.props.recommendAction.fetchRecommends();
  }

  renderRecommendList(){

    let { recommends } = this.props;

    return (
        <Panel access>
            <PanelHeader>
                特色服务
            </PanelHeader>
            <PanelBody>
                {
                  (recommends && recommends.results && recommends.results.length>0) ?
                  recommends.results.map((recommend, index) =>  
                    <RecommendItem recommend={ recommend } key={ index} />
                  )
                  :
                  <div className="text-empty">
                    暂无数据
                  </div>
                }
            </PanelBody>
            <PanelFooter>
                <Link to={`/recommend`}>
                  查看更多
                </Link>
            </PanelFooter>
        </Panel>
    )
  }

  renderArticleList(){

    let { articles } = this.props;

    return (
      <Panel access>
          <PanelHeader>
              策略热文
          </PanelHeader>
          <PanelBody>
              {
                (articles && articles.results && articles.results.length>0) ?
                articles.results.slice(0, 3).map((article, index) =>  
                  <ArticleItem article={ article } key={ index }/>
                )
                :
                <div className="text-empty">
                  暂无数据
                </div>
              }
          </PanelBody>
          <PanelFooter>
              <Link to={`/article`}>
                查看更多
              </Link>
          </PanelFooter>
        </Panel>
    );
  }

  render() {

    let recommendList = this.renderRecommendList();

    let articleList = this.renderArticleList();

    return (
      <Container 
      titleEnabled = { true }
      titleText = { '服务' }
      menuEnabled = { true }
      sidebarEnabled = { true }>
        
        { recommendList }

        { articleList }

      </Container>
    );
  }
}

export default connect(state => ({
  articles : state.article,
  recommends : state.recommend 
}), dispatch => ({ 
  articleAction : bindActionCreators(ArticleAction, dispatch),
  recommendAction : bindActionCreators(RecommendAction, dispatch)
}))(HomeApp);

