require('./footer.scss');
import React from 'react';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutube from 'react-icons/lib/fa/youtube-play';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';
import FaSnapchat from 'react-icons/lib/fa/snapchat-ghost';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.accounts = [
      { url: "https://www.facebook.com/upennmasti", icon: FaFacebook, className: 'footer-fb-icon' },
      { url: "https://www.twitter.com/pennmasti", icon: FaTwitter, className: 'footer-twitter-icon' },
      { url: "https://www.instagram.com/pennmasti/", icon: FaInstagram, className: 'footer-instagram-icon' },
      { url: "https://soundcloud.com/penn-masti", icon: FaSoundcloud, className: 'footer-soundcloud-icon' },
      { url: "https://www.youtube.com/user/pennmasti", icon: FaYoutube, className: 'footer-youtube-icon' },
      { url: "https://www.snapchat.com/add/pennmasti", icon: FaSnapchat, className: 'footer-snapchat-icon' },
    ];

    this._getIcon = this._getIcon.bind(this);
  }

  _getIcon(url, Icon, iconClassName='') {
    return (
      <a target="_blank" href={url} key={iconClassName} className='footer-icon-link'>
        <Icon className={`footer-icon ${iconClassName}`} />
      </a>
    );
  }

  _getFiller() {
    if (window.location.pathname === '/') return null;
    return <div className='footer-filler' />;
  }

  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-container">
            { this.accounts.map(account => this._getIcon(account.url, account.icon, account.className)) }
          </div>
        </div>

        { this._getFiller() }
      </div>
    );
  }
}

export default Footer;
