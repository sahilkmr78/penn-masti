import React from 'react';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
          <div className="footer-container">
            <a target="_blank" href="https://www.facebook.com/upennmasti"><FaFacebook className="footer-icon" /></a>
            <a target="_blank" href="https://www.twitter.com/pennmasti"><FaTwitter className="footer-icon" /></a>
          </div>
        </div>
    );
  }
}

export default Footer;
