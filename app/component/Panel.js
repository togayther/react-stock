import React from 'react';

class Panel extends React.Component {

  constructor() {
    super();
  }

  render() {

    return(
        <div className="panel-container">
  	      <div className="panel-header-title">{ this.props.title }</div>
  	      { this.props.children }
  	    </div>
    )
  }
}
export default Panel;
