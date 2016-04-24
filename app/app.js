import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { Store } from './store';
import { hashHistory } from 'react-router';

import '../asset/sass/app.scss';

ReactDOM.render(
	<Root history={ hashHistory } store={ Store } />,
	document.getElementById("main")
);
