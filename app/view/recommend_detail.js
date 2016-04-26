import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as RecommendAction from '../action/recommend';
import Container from '../component/container';

import {
    Article
} from 'react-weui';


class RecommendDetailApp extends React.Component {

  constructor () {
    super(); 
  }

  componentDidMount(){
    this.getRecommendInfo();
  }

  getRecommendInfo(){
    let id = this.props.location.query.id;

    let { recommends } = this.props;

    let recommendInfo = null;

    if(recommends && recommends.results && recommends.results.length){
      for(let i =0 ,len = recommends.results.length; i < len; i++){
        let recommendItem = recommends.results[i];
        if (recommendItem.id === id) {
          recommendInfo = recommendItem;
          break;
        }
      }
    }

    return recommendInfo;
  }


  render() {

    let recommendInfo = this.getRecommendInfo();

    return (
      <Container 
      titleEnabled = { true }
      returnEnabled = { true }
      menuEnabled = { false }
      sidebarEnabled = { true }>
        
        <Article>
            <section>
                <h2 className="title">{ recommendInfo.title }</h2>
                <section>
                    <div>
                      { recommendInfo.content }
                    </div>
                </section>
            </section>
        </Article>

      </Container>
    );
  }
}

export default connect(state => ({
  recommends : state.recommend
}), dispatch => ({ 
  recommendAction : bindActionCreators(RecommendAction, dispatch)
}))(RecommendDetailApp);

