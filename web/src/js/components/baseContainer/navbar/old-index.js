require('./navbar.scss');
import React from 'react';
import { Link, IndexLink } from 'react-router';

import { Navbar as BootstrapNavbar, Nav, NavItem } from 'react-bootstrap';

import FaAlignJustify from 'react-icons/lib/fa/align-justify';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
  }

  toggleMenu() {
    this.setState({ openMenu: !this.state.openMenu });
  }

  render() {

    var currentPage = this.props.routeName;
    var navItems = [
      { name: 'About', id: 'about', path: '/about' },
      { name: 'Members', id: 'members', path: '/members' },
      { name: 'Media', id: 'media', path: '/media' },
      { name: 'Contact', id: 'contact', path: '/contact' }
    ];

    return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
            <div className="navbar-left">
              <IndexLink className="navbar-left-link" to="/">
                <img className="navbar-logo" src={require('img/logo.jpg')} />
                <span className="navbar-logo-text">Penn Masti</span>
              </IndexLink>
            </div>

          <div className="navbar-right show-for-medium-up">
            { navItems.map(item =>
                <Link to={item.path} key={item.id} className={"navbar-item" + (item.id == currentPage ? ' navbar-item-active' : '')}>
                  {item.name}
                </Link>
            ) }
          </div>

          <div className="navbar-right show-for-small-only">
            <FaAlignJustify style={{fill: 'white', cursor: 'pointer'}} onClick={this.toggleMenu.bind(this)}/>
          </div>
        </div>

        { this.state.openMenu ?
        <div className="navbar-menu show-for-small-only">
          { navItems.map(item =>
              <div key={item.id} className={"navbar-menu-item" + (item.id == currentPage ? ' navbar-menu-item-active' : '')}>
                <Link to={item.path}>
                  {item.name}
                </Link>
              </div>
          ) }
        </div>
        : <span/> }
      </div>

      <div className="navbar-fill-large">&nbsp;</div>
    </div>
    );
  }
}

export default Navbar;
