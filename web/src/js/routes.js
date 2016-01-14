import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import BasePage from 'components/base/basePage';
import HomePage from 'components/home/homePage';
import AboutPage from 'components/about/aboutPage';
import MembersPage from 'components/members/membersPage';
import MediaPage from 'components/media/mediaPage';
import ContactPage from 'components/contact/contactPage';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />
      <Route path='about' component={AboutPage} />
      <Route path='members' component={MembersPage} />
      <Route path='media' component={MediaPage} />
      <Route path='contact' component={ContactPage} />
    </Route>
  </Router>
);

export default routes;
