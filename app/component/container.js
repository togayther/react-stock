import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';

import { default as Sidebar } from 'react-sidebar';
import Panel from '../component/panel';

import * as SidebarConfig from '../config/page/sidebar';
import * as MenuConfig from '../config/page/menu';

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

  componentDidMount(){
  }

  onSetSidebarOpen(sidebarOpen) {
    this.setState({sidebarOpen: sidebarOpen});
  }

  onReturnClick(e){
    e.preventDefault();
    this.context.router.goBack();
  }

  onSidebarMenuClick(e){
    e.preventDefault();
  	this.onSetSidebarOpen(!this.state.sidebarOpen);	
  }

  renderSidebarItem(item, index){
    let itemClass = classNames({
      "active": index<1
    });

    return (
      <li key={ index }>
        <Link to={item.link} className={ itemClass }>
          <i className={ item.icon }></i>
          <span>{ item.text }</span>
        </Link>
      </li>
    );
  }

  renderSidebarContent(){

    let { sidebarEnabled } = this.props;

    let sidebarItems = SidebarConfig.items;

  	return (
           sidebarEnabled === true?
           <Panel title={ this.renderSidebarHeader() }>
              <ul className="sidebar-menus">
                {
                  sidebarItems && sidebarItems.map(
                    (item, index) => (
                        this.renderSidebarItem(item, index)
                    )
                  )
                }
              </ul>
          </Panel>
          :
          null
  	);
  }

  renderSidebarHeader(){

    const userAvatar = <img src="data:image/jpg;base64,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" />;

    return(
      <div className="user-profile">
        { userAvatar }
        <span>13540312451</span>
      </div>
    );
  }

  renderMainContentHeader(){
    let { titleText = '返回', returnEnabled } = this.props;

    let iconClass = classNames("iconfont", {
      "icon-arrowleft": returnEnabled===true,
      "icon-menu": !returnEnabled
    });

    console.info("returnEnabled");
    console.info(returnEnabled);

    let onIconClick = (
      returnEnabled===true?
      this.onReturnClick
      :
      this.onSidebarMenuClick
    );

    return(
      <span>
         <a href="javascript:;" 
          className="panel-header-sidebar"
          onClick={ onIconClick.bind(this) } >
          <i className={ iconClass }></i>
        </a>
        <span>{ titleText }</span>
      </span>
    );
  }

  onExternalLinkClick(data, e){
    window.location.href = data;
    e.preventDefault();
  }

  renderMenuItem(item, index){

    //判断该菜单项是否激活
    let isMenuActive = 
      (index == 0 && !this.props.route.path) || 
      (!item.onClick && this.context.router.isActive(item.link))

    let itemClass = classNames( "weui_tabbar_item",{
      "weui_bar_item_on": isMenuActive
    });

    let linkParameter = {
      className: itemClass,
      key : index
    };
    if(item.onClick && this[item.onClick]){
      linkParameter.onClick = this[item.onClick].bind(this, item.link);
      linkParameter.to = "";
    }else{
      linkParameter.onClick = null;
      linkParameter.to = item.link;
    }

    return (
        <Link {...linkParameter}>

          <div className="weui_tabbar_icon">
              <i className= { item.icon }></i>
          </div>
          <p className="weui_tabbar_label">{ item.text }</p>

        </Link>
    );
  }

  renderMenuContent(){

    let { menuEnabled } = this.props;
    let menuItems = MenuConfig.items;

    return (
      menuEnabled === true?
        <div>
          <div className="blank60"></div>
          <div className="weui_tab">
              <div className="weui_tabbar">
                  {
                    menuItems && menuItems.map(
                      (item, index) => (
                          this.renderMenuItem(item, index)
                      )
                    )
                  }
              </div>
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