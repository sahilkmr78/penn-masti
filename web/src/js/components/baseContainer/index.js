import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './navbar';
import Footer from './footer';
import MUTheme from 'utils/mu-theme';

export default class BaseContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={MUTheme}>
        <div className="base-page" style={{height:'100%'}}>
          <Navbar />
          { this.props.children }
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
