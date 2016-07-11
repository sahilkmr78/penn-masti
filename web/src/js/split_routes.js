import React from 'react';
import { Router, Route, IndexRoute, applyRouterMiddleware, browserHistory } from 'react-router';
import useScroll from 'react-router-scroll';

import BaseContainer from 'components/baseContainer';
// import HomePage from 'components/home';
// import AboutPage from 'components/about';
// import MembersPage from 'components/members';
// import MemberPage from 'components/member';
// import MediaPage from 'components/media';
// import ContactPage from 'components/contact';

const routes = (
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path="/" component={BaseContainer}>

      <IndexRoute getComponent={(location, cb) => {
        require.ensure([], require => cb(null, require('./components/home').default))
      }} />

      <Route path='about' getComponent={(location, cb) => {
        require.ensure([], require => cb(null, require('./components/about').default))
      }} />
      <Route path='members' getComponent={(location, cb) => {
        require.ensure([], require => cb(null, require('./components/members').default))
      }} />
      <Route path='member/:memberId' getComponent={(location, cb) => {
        require.ensure([], require => cb(null, require('./components/member').default))
      }} />
      <Route path='media' getComponent={(location, cb) => {
        require.ensure([], require => cb(null, require('./components/media').default))
      }} />
      <Route path='contact' getComponent={(location, cb) => {
        require.ensure([], require => cb(null, require('./components/contact').default))
      }} />

    </Route>
  </Router>
);

export default routes;
