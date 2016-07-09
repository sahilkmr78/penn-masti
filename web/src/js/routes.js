import React from 'react';
import { Router, Route, IndexRoute, applyRouterMiddleware, browserHistory } from 'react-router';
import useScroll from 'react-router-scroll';

import BaseContainer from 'components/baseContainer';
import HomePage from 'components/home';
import AboutPage from 'components/about';
import MembersPage from 'components/members';
import MemberPage from 'components/member';
import MediaPage from 'components/media';
import ContactPage from 'components/contact';

const routes = (
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path="/" component={BaseContainer}>
      <IndexRoute component={HomePage} />
      <Route path='about' component={AboutPage} />
      <Route path='members' component={MembersPage} />
      <Route path='member/:memberId' component={MemberPage} />
      <Route path='media' component={MediaPage} />
      <Route path='contact' component={ContactPage} />
    </Route>
  </Router>
);

export default routes;
