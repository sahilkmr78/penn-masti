require('scss/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

// dependency for material-ui
// required because of how tap events are handled on mobile
// should go away once material ui matures to 1.0
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import routes from './routes';

class App extends React.Component {
  render() {
    return routes;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
