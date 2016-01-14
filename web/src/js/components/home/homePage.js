import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
        <div className="home-page">
          <div className="home-text">
            <h1>Welcome to the official website of Penn Masti!</h1>
            <h3>We are Penn's premier South Asian-fusion dance team.</h3>

            <Link to="/about" className="home-about-button">About Us</Link>
          </div>
        </div>
    );
  }
}

export default HomePage;
