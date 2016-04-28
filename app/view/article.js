import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Carousel  from 'nuka-carousel';
import Container from '../component/container';
import * as ArticleAction from '../action/article';
import ArticleItem from '../component/article_item';
import CarouselDecorators from '../component/carousel_decorator';

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

  renderAdvertList(){
    return (
      <Carousel decorators = { CarouselDecorators } className="carousel-container">
        <Link to={`home`}>
          <img src="http://o2o.hx168.com.cn/hxfinance/Public/Upload/Image/2016-04-28/1461829923.png"/>
        </Link>
        <Link to={`home`}>
          <img src="http://o2o.hx168.com.cn/hxfinance/Public/Upload/Image/2016-04-28/1461829927.png"/>
        </Link>
      </Carousel>
    );
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

    let advertList = this.renderAdvertList();

    let articleList = this.renderArticleList();

    return (
      <Container { ...this.props}
        titleEnabled = { true }
        titleText = { '策略热文' }
        returnEnabled = { true }
        menuEnabled = { false }
        sidebarEnabled = { true }>

          { advertList }
          
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

