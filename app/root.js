import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import Container from './component/container';
import * as View from './view/index';

class Root extends React.Component {

  render () {

    let { store, history } = this.props;

    return (
      <Provider store={ store }>
          <Router history={ history }>
            <Route path='/'>
              <IndexRoute component={ View.Home } />
              <Route path='/login' component={ View.Login } />
              <Route path='/home' component={ View.Home } />
              <Route path='/account' component={ View.Account } />
              <Route path='/article' component={ View.Article } />
              <Route path="/articledetail" component={View.ArticleDetail} />
              <Route path='/recommend' component={ View.Recommend } />
              <Route path="/recommenddetail" component={View.RecommendDetail} />
            </Route>
          </Router>
      </Provider>
    )
  }
}

export default Root;
