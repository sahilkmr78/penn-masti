import React from 'react';

import Navbar from './navbar';
import Footer from './footer';

class BasePage extends React.Component {
  render() {
    var routes = this.props.routes;
    var componentName = routes[routes.length - 1].component.name;
    var routeName = {
      HomePage: 'home',
      MembersPage: 'members',
      MemberPage: 'member',
      AboutPage: 'about',
      MediaPage: 'media',
      ContactPage: 'contact'
    }[componentName];

    return (
        <div className="base-page">
          <Navbar routeName={routeName} />
          {this.props.children}
          <Footer />
        </div>
    );
  }
}

export default BasePage;
