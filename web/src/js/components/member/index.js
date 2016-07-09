require('./member-page.scss');

import React from 'react';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutube from 'react-icons/lib/fa/youtube-play';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';
import FaSnapchat from 'react-icons/lib/fa/snapchat-ghost';

import membersList from '../shared/members-list';

const SOCIAL_ACCOUNTS = {
  facebook: { name: 'facebook', baseUrl: 'https://www.facebook.com/', icon: FaFacebook },
  soundcloud: { name: 'soundcloud', baseUrl: 'https://www.soundcloud.com/', icon: FaSoundcloud },
  instagram: { name: 'instagram', baseUrl: 'https://www.instagram.com/', icon: FaInstagram },
  twitter: { name: 'twitter', baseUrl: 'https://www.twitter.com/', icon: FaTwitter },
  snapchat: { name: 'snapchat', baseUrl: 'https://www.snapchat.com/add/', icon: FaSnapchat },
  youtube: { name: 'youtube', baseUrl: 'https://www.youtube.com/user/', icon: FaYoutube },
};

export default class MemberPage extends React.Component {
  constructor(props) {
    super(props);

    this._getMemberFromList = this._getMemberFromList.bind(this);
    this._getMember = this._getMember.bind(this);
  }

  _getMemberFromList(list, memberId) {
    for (let i = 0; i < list.length; i++) {
      const member = list[i];
      if (member.id === memberId) {
        return member;
      }
    }
    return null;
  }

  _getMember(memberId) {
    const currentMember = this._getMemberFromList(membersList.currentMembers, memberId);
    if (currentMember) return currentMember;
    return this._getMemberFromList(membersList.alumni, memberId);
  }

  _getMemberInfoItem(title, text) {
    if (!text) return null;
    return (
      <div>
        <div className='member-stats-item-title'>{title}:</div>
        <div className='member-stats-item-text'>{text}</div>
      </div>
    );
  }

  _getMemberPicCard(member) {
    if (!member.pic) return null;
    return (
      <Card className='member-pic-card' zDepth={2}>
        <img src={member.pic} />
      </Card>
    );
  }

  _getSocialMediaIconButton(accountInfo, screenname) {
    if (!screenname) return null;

    const url = `${accountInfo.baseUrl}${screenname}`;
    const Icon = accountInfo.icon;
    const name = accountInfo.name;

    return (
      <a className={`member-social-media-account ${name}`} target={'_blank'} href={url}>
        <Icon className={`member-social-media-account-icon ${name}`} />
      </a>
    );

    return (
      <IconButton
        className='member-social-media-icon-button'
        linkButton={true}
        href={url}
        target='_blank'
      >
        <Icon className={`member-social-media-account-icon ${name}`} />
      </IconButton>
    );
  }

  _getSocialMediaCard(accounts) {
    if (!accounts || Object.keys(accounts).length === 0) return null;

    return (
      <Card className='member-social-media-card' zDepth={2}>
        <div className='member-social-media-header'>Find me on Social Media!</div>

        <div className='member-social-media-accounts'>
          { this._getSocialMediaIconButton(SOCIAL_ACCOUNTS.facebook, accounts.facebook) }
          { this._getSocialMediaIconButton(SOCIAL_ACCOUNTS.soundcloud, accounts.soundcloud) }
          { this._getSocialMediaIconButton(SOCIAL_ACCOUNTS.instagram, accounts.instagram) }
          { this._getSocialMediaIconButton(SOCIAL_ACCOUNTS.youtube, accounts.youtube) }
          { this._getSocialMediaIconButton(SOCIAL_ACCOUNTS.twitter, accounts.twitter) }
          { this._getSocialMediaIconButton(SOCIAL_ACCOUNTS.snapchat, accounts.snapchat) }
        </div>
      </Card>
    );
  }

  render() {
    const memberId = this.props.routeParams.memberId;
    const member = this._getMember(memberId);
    console.log(member);
    if (!member) {
      return (
        <div className='member-page-not-found'>
          NOT FOUND
        </div>
      );
    }

    const name = `${member.firstName} ${member.middleName || ''} ${member.lastName}`;
    const memberStatus = member.position || (member.class <= 2016 && 'Alumni') || null;

    return (
      <div className='member-page'>
        <div className='member-page-left'>
          <Card className='member-stats-card' zDepth={2}>
            <Paper className='member-stats-paper-pic' zDepth={2} rounded={true}>
              <img className='member-stats-pic' src={member.thumb} />
            </Paper>

            <div className='member-stats-header'>
              <div className='member-stats-name'>{ name }</div>
              { memberStatus && <div className='member-stats-status'>{memberStatus}</div> }
            </div>

            <div className='member-stats-text'>
              { this._getMemberInfoItem('Graduation Year', member.class) }
              { this._getMemberInfoItem('Favorite Song', member.favoriteSong) }
              { this._getMemberInfoItem('School', member.school) }
              { this._getMemberInfoItem('Major', member.major) }
              { this._getMemberInfoItem('Occupation', member.occupation) }
              { this._getMemberInfoItem('Employer', member.employer) }
            </div>
          </Card>

          { this._getSocialMediaCard(member.socialMedia) }
        </div>

        <div className='member-page-right'>
          { this._getMemberPicCard(member) }
          <Card className='member-bio-card' zDepth={2}>
            <div className='member-bio-title'>About { name }</div>
            <div className='member-bio-text'>{ member.bio }</div>
          </Card>
        </div>
      </div>
    );
  }
}
