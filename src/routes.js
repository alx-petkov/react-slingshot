import React from 'react';
import { Route, /* IndexRoute, */ Router, browserHistory } from 'react-router';

import App from './components/App';
import Home from './containers/HomePage';
import Layout from './containers/LayoutContainer';
import StatsPage from './components/Page/StatsPage';
// import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route component={App}> //// this bunch is messing up development
      <Route path="fuel-savings" component={FuelSavingsPage}/>
      <Route path="about" component={AboutPage}/>
      {/* <Route path="*" component={NotFoundPage}/> */}
    </Route>
    <Route component={Layout}>
      <Route path=":category(/:object(/:detail))" component={StatsPage} />
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
