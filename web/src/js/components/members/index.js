require('./members-page.scss');

import React from 'react';
import { Link } from 'react-router';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import membersList from '../shared/members-list';

export default class MembersPage extends React.Component {
  constructor(props) {
    super(props);

    this._getMembersGroup = this._getMembersGroup.bind(this);
  }

  _getMembersGroup(members, title) {
    return (
      <div className='members-box-group'>
        <div className='members-group-title'>{title}</div>
        <div className='members-grid'>
          {
            members.map(member => {
              const name = `${member.firstName} ${member.middleName || ''} ${member.lastName}`;
              return (
                <Link to={`/member/${member.id}`} className='members-grid-link' key={member.id}>
                  <Card className='members-grid-member' key={member.id}>
                    <div className='members-grid-member-thumbnail-container'>
                      <img src={require(member.thumb)} className='members-grid-member-thumbnail' />
                    </div>

                    <div className='members-grid-member-info'>
                      <div className='members-grid-member-name'>{name}</div>
                      <div className='members-grid-member-year'>{member.class}</div>
                    </div>
                  </Card>
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="members-page">
        <Card className="members-box">
          <div className='members-box-title'>Meet the team!</div>
          {/*<div className='members-box-description'>Click on any member to learn more about them!</div>*/}

          { this._getMembersGroup(membersList.currentMembers, 'Current Team') }
          { this._getMembersGroup(membersList.alumni, 'Alumni') }
        </Card>
      </div>
    );
  }
}
