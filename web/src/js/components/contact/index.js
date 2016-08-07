require('./contact-page.scss');

import React from 'react';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';

export default class ContactPage extends React.Component {
  _getContactInfoCard(name, position, email) {
    return (
      <Card className='contact-info-card'>
        <div className='contact-info-card-title'>{name}, {position}</div>
        <div className='contact-info-card-email'>
          {'Email: '}
          <a href={`mailto:${email}`} className='contact-link'>{email}</a>
        </div>
      </Card>
    );
  }

  render() {
    return (
      <div className="contact-page">
        <Card className='contact-title-card' zDepth={2}>
          <div className='contact-title'>Contact</div>
          <div className='contact-description'>
            {'Depending on the nature of your query, please direct your message to the appropriate person listed below. For general questions, feel free to email '}
            <a href='mailto:pennmasti@gmail.com' className='contact-link'>pennmasti@gmail.com</a>.
          </div>
        </Card>

        <Card zDepth={2}>
          <div className='contact-list-card'>
            <div className='contact-list-card-map'>
              <Paper className='contact-list-card-map-paper'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12234.522845042044!2d-75.19560320000001!3d39.94964930000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c65a7f3bccc1%3A0x9eaa6a2b2d6fe94!2sUniversity+of+Pennsylvania!5e0!3m2!1sen!2sus!4v1433053648091" className='contact-philly-map' frameborder="0" style={{border:0}} />
              </Paper>
            </div>

            <div className='contact-list-card-contacts'>
              <div className='contact-list-column-left'>
                { this._getContactInfoCard('Gagan Gupta', 'President', 'nnaidu03@gmail.com') }
                { this._getContactInfoCard('Rathnam Venkat', 'Treasurer', 'mnie@wharton.upenn.edu') }
                { this._getContactInfoCard('Sahil Kumar', 'Show Chair', 'arjunxnair@gmail.com') }
                { this._getContactInfoCard('Anushka Makhija', 'Show Chair', 'swathi.raman09@gmail.com') }
                { this._getContactInfoCard('Anjali Mahadevia', 'Marketing Chair', 'akshat.ag77@gmail.com') }
              </div>
              <div className='contact-list-column-right'>
                { this._getContactInfoCard('Arjun Nair', 'Vice-President', 'eptal4271@gmail.com') }
                { this._getContactInfoCard('Hemanth Chittela', 'Competition Chair', 'gagan.aj.gupta@gmail.com') }
                { this._getContactInfoCard('Nihar Sheth', 'Outreach Chair', 'rathnamkvenkat@gmail.com') }
                { this._getContactInfoCard('Ria Desai', 'Costume Chair', 'riades@sas.upenn.edu') }
                { this._getContactInfoCard('Ashwin Baweja', 'Webmaster', 'ashwinb10@gmail.com') }
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
