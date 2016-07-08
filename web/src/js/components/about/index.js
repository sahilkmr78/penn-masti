require('./about-page.scss');

import React from 'react';
import ImageGallery from 'react-image-gallery';

// IMPORTANT: make sure all images being used have the same aspect ratio
// otherwise, the carousel will change sizes when scrolling between images
const CAROUSEL_IMAGES = [
  require('./carousel-pics/infusion-2015-mixer-team.jpg'),
  require('./carousel-pics/infusion-stage-winning.jpg'),
  require('./carousel-pics/infusion-team.jpg'),
  require('./carousel-pics/photoshoot-team-2015.jpg'),
  require('./carousel-pics/photoshoot-ys-2015.jpg'),
  require('./carousel-pics/photoshoot-xs-2015.jpg'),
];

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.imageItems = CAROUSEL_IMAGES.map(item => ({
      original: item,
      thumbnail: item,
      originalClass: 'about-pic-original',
      thumbnailClass: 'about-pic-thumbnail',
    }));
  }

  render() {
    return (
      <div className="about-page">
        <div className="about-page-container">
          <div className='about-pics-gallery'>
            <ImageGallery
              ref={r => this._imageGallery = r}
              items={this.imageItems}
              autoPlay={false}
              slideInterval={3000}
              infinite={false}
            />
          </div>

          <div className="about-info-para">
            <h2>About Masti</h2>
            <span className='about-info-para-text'>Masti means flirtation or mischief, and its members certainly have a healthy dose of each. In addition, Mastifellows love to dance. Masti has recently integrated numerous dance styles such as Bharata Natyam, Bhangra, Filmy, Lyrical, Bachata, and Hip-Hop. Penn Masti hosts an annual show in February that has historically attracted audiences of over 500 people. Masti has remained active in the South Asia Society’s culture shows, while expanding into other areas of performance as well. In 2011, Masti competed at Princeton Dance Dimensions in New Jersey and in 2012 at Naach at Hofstra University in New York. Through the dedication of its members and its unique culture, Masti hopes to make its mark as Penn’s premier co-ed South Asian fusion dance team.</span>
          </div>
        </div>
      </div>
    );
  }
}
