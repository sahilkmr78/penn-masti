require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';

class App extends React.Component {
  render() {
    return routes;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
