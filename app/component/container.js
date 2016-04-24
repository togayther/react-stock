import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';

import { default as Sidebar } from 'react-sidebar';

import Panel from '../component/panel';

class Container extends React.Component {
  
  constructor() {
    super();

    this.state = {
      sidebarOpen: false
    };
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  static propTypes = {
    
  }

  onSetSidebarOpen(sidebarOpen) {
    this.setState({sidebarOpen: sidebarOpen});
  }

  onSidebarMenuClick(){
  	this.onSetSidebarOpen(!this.state.sidebarOpen);	
  }

  renderSidebarContent(){

    let { sidebarEnabled } = this.props;

  	return (
           sidebarEnabled === true?
           <Panel title={ this.renderSidebarHeader() }>
              <ul className="sidebar-menus">
                <li>
                  <a href="" className="active">侧边导航栏内容</a>
                </li>
                <li>
                  <a href="">侧边导航栏内容</a>
                </li>
                <li>
                  <a href="">侧边导航栏内容</a>
                </li>
                <li>
                  <a href="">侧边导航栏内容</a>
                </li>
                <li>
                  <a href="">侧边导航栏内容</a>
                </li>
                <li>
                  <a href="">侧边导航栏内容</a>
                </li>
              </ul>
          </Panel>
          :
          null
  	);
  }

  renderSidebarHeader(){
    return(
      <div>
        <img src=""/>
        <span>侧边栏标题</span>
      </div>
    );
  }

  renderMainContentHeader(){
    let { titleText } = this.props;
    return(
      <span>
        <a href="#" 
          className="panel-header-sidebar"
          onClick={ this.onSidebarMenuClick.bind(this) } >
          =
        </a>
        <span>{ titleText }</span>
      </span>
    );
  }

  renderMenuContent(){
    let { menuEnabled } = this.props;
    return (
      menuEnabled === true?
        <div className="weui_tab">
          <div className="weui_tabbar">
              <a href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
                  <div className="weui_tabbar_icon">
                      <i className="iconfont icon-layers"></i>
                  </div>
                  <p className="weui_tabbar_label">服务</p>
              </a>
              <a href="javascript:;" className="weui_tabbar_item">
                  <div className="weui_tabbar_icon">
                      <i className="iconfont icon-linegraph"></i>
                  </div>
                  <p className="weui_tabbar_label">行情</p>
              </a>
              <a href="javascript:;" className="weui_tabbar_item">
                  <div className="weui_tabbar_icon">
                      <i className="iconfont icon-upload"></i>
                  </div>
                  <p className="weui_tabbar_label">交易</p>
              </a>
              <a href="javascript:;" className="weui_tabbar_item">
                  <div className="weui_tabbar_icon">
                      <i className="iconfont icon-heart"></i>
                  </div>
                  <p className="weui_tabbar_label">开户</p>
              </a>
          </div>
      </div>
      :
      null
    );
  }

  renderMainContent(){
    let { titleEnabled, children } = this.props;
    return (
        titleEnabled === true?
        <Panel title={ this.renderMainContentHeader() }>
          { children }
        </Panel>
        :
        <div>
          { children }
        </div>
    );
  }

  render() {

    let sidebarContent = this.renderSidebarContent();
    let mainContent = this.renderMainContent();

    let menuContent = this.renderMenuContent();

    return (
       <Sidebar sidebar={ sidebarContent }
          open={ this.state.sidebarOpen }
          sidebarClassName = {'sidebar-container'}
          onSetOpen={ this.onSetSidebarOpen.bind(this) }>
        
        { mainContent }

        { menuContent }
        
      </Sidebar>
    );
  }
}

export default connect(state => ({
    
}), dispatch => ({

}))(Container);