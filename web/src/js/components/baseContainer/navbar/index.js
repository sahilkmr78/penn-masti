require('./navbar.scss');
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, IndexLink } from 'react-router';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import FaClose from 'react-icons/lib/fa/close';
import { darken } from 'material-ui/utils/colorManipulator';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.buttons = [
      { title: 'About', url: '/about' },
      { title: 'Members', url: '/members' },
      { title: 'Media', url: '/media' },
      { title: 'Contact', url: '/contact' },
    ];

    this.state = {
      showExpandedMenu: false,
    };

    this._getNavbarButton = this._getNavbarButton.bind(this);
    this._getTitleButton = this._getTitleButton.bind(this);
    this._getNavbarRightLarge = this._getNavbarRightLarge.bind(this);
    this._getNavbarRightSmall = this._getNavbarRightSmall.bind(this);
    this._toggleExpandedMenu = this._toggleExpandedMenu.bind(this);
    this._getExpandedMenu = this._getExpandedMenu.bind(this);
    this._getAnimatedExpandedMenu = this._getAnimatedExpandedMenu.bind(this);
  }

  _getNavbarButton(title, url) {
    return (
      <FlatButton
        key={title}
        className={'navbar-right-button'}
        label={<span className='navbar-right-button-label'>{title}</span>}
        linkButton={true}
        containerElement={<Link to={url} activeClassName='navbar-right-link-active' />}
        labelStyle={{color: 'white'}}
        hoverColor={darken("#fa0209", 0.4)}
      />
    );
  }

  _getTitleButton() {
    // span is required to prevent the title from
    // taking up the entire navbar upto the buttons
    return (
      <span style={{display:'inline-block'}}>
        <IndexLink className="navbar-left" to="/">
          <img className="navbar-logo" src={require('img/logo.jpg')} />
          Penn Masti
        </IndexLink>
      </span>
    );
  }

  _getNavbarRightLarge(buttons) {
    return (
      <div className='navbar-right show-for-medium-up'>
        { buttons.map(buttonInfo => this._getNavbarButton(buttonInfo.title, buttonInfo.url)) }
      </div>
    );
  }

  _getNavbarRightSmall() {
    return (
      <div className='navbar-right show-for-small-only'>
        <IconButton
          className='navbar-menu-icon'
          onTouchTap={this._toggleExpandedMenu}
        >
          <MenuIcon color={'white'} />
        </IconButton>
      </div>
    );
  }

  _toggleExpandedMenu() {
    this.setState({
      showExpandedMenu: !this.state.showExpandedMenu,
    });
  }

  _getFiller() {
    if (window.location.pathname === '/') return null;

    return <div className='navbar-filler' />;
  }

  _getExpandedMenu(buttons) {
    if (!this.state.showExpandedMenu) return null;

    return (
      <div className='navbar-expanded-menu'>
        <IconButton
          className='navbar-expanded-menu-close-button'
          onTouchTap={this._toggleExpandedMenu}
        >
          {/*<FaClose className='navbar-expanded-menu-close-icon' />*/}
          <CloseIcon color='white' />
        </IconButton>

        <div className='navbar-expanded-menu-items'>
          { buttons.map(buttonInfo => (
            <div onClick={this._toggleExpandedMenu} key={buttonInfo.title}>
              <FlatButton
                className={'navbar-expanded-menu-button'}
                label={<span className='navbar-expanded-menu-button-label'>{buttonInfo.title}</span>}
                linkButton={true}
                containerElement={<Link to={buttonInfo.url} activeClassName='navbar-right-link-active' />}
                labelStyle={{color: 'white'}}
                hoverColor={darken("#fa0209", 0.4)}
              />
            </div>
          )) }
        </div>
      </div>
    );
  }

  _getAnimatedExpandedMenu(buttons) {
    const menu = this._getExpandedMenu(buttons);
    return (
      <ReactCSSTransitionGroup transitionName='navbar-expanded-menu-animate' transitionEnterTimeout={300} transitionLeaveTimeout={400}>
        { menu }
      </ReactCSSTransitionGroup>
    );
  }

  render() {
    return (
      <div>
        <AppBar
          title={this._getTitleButton()}
          zDepth={1}
          showMenuIconButton={false}
          className='navbar'
        >
          { this._getNavbarRightLarge(this.buttons) }
          { this._getNavbarRightSmall() }
        </AppBar>
        { this._getAnimatedExpandedMenu(this.buttons) }
        { this._getFiller() }
      </div>
    );
  }
}
