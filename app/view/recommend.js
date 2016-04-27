import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Container from '../component/container';
import * as RecommendAction from '../action/recommend';
import RecommendItem from '../component/recommend_item';

import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter
} from 'react-weui';

class RecommendApp extends React.Component {

  constructor () {
    super(); 
  }

  componentDidMount(){
    this.props.recommendAction.fetchRecommends();
  }

  renderRecommendList(){
    let { recommends } = this.props;

    return (
      <Panel access>
          <PanelBody>
              {
                (recommends && recommends.results && recommends.results.length>0) ?
                recommends.results.map((recommend, index) =>  
                  <RecommendItem recommend={ recommend } key={ index }/>
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
    let recommendList = this.renderRecommendList();

    return (
      <Container { ...this.props}
        titleEnabled = { true }
        titleText = { '盘前股讯' }
        returnEnabled = { true }
        menuEnabled = { false }
        sidebarEnabled = { true }>
          
          { recommendList }

        </Container>
    );
  }
}

export default connect(state => ({
  recommends : state.recommend
}), dispatch => ({ 
  recommendAction : bindActionCreators(RecommendAction, dispatch)
}))(RecommendApp);

