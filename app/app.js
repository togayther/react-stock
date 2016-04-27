import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { Store } from './store';
import { hashHistory } from 'react-router';

if (process.env.NODE_ENV !== 'production') {
  require('../asset/sass/app.scss');
}

ReactDOM.render(
	<Root history={ hashHistory } store={ Store } />,
	document.getElementById("main")
);
