require('./home.scss');
import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRightIcon from 'react-icons/lib/fa/chevron-right';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-bg-pic">
          <div className="home-bg-pic-text">
            <h1>Welcome to the official website of Penn Masti!</h1>
            <h3>We are Penn's premier South Asian-fusion dance team.</h3>

            <RaisedButton
              label={'About Us'}
              linkButton={true}
              containerElement={<Link to='about' className='home-bg-pic-about-button' />}
              primary={true}
              icon={<ChevronRightIcon />}
              labelPosition={'before'}
              labelStyle={{fontWeight:'700'}}
            />
          </div>
        </div>
      </div>
    );
  }
}
