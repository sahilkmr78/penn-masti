require('./media-page.scss');

import React from 'react';
import Card from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';
const InfiniteScroll = require('../shared/infinite-scroll')(React);

import mediaList from './media-list';

export default class MediaPage extends React.Component {
  componentWillMount() {
    this.state = {
      tab: 'shows',
      numItemsShown: 2,
    };

    this._changeTab = this._changeTab.bind(this);
    this._getMediaItem = this._getMediaItem.bind(this);
    this._loadMoreItems = this._loadMoreItems.bind(this);
  }

  _changeTab(newTab) {
    this.setState({
      tab: newTab,
      numItemsShown: 2,
    });
  }

  _getMediaItem(mediaInfo) {
    return (
      <Card className='media-item-card' zDepth={5} key={mediaInfo.url}>
        {/*<div className='media-item-title'>{mediaInfo.title}</div>*/}

        <div className='media-item-iframe-container'>
          <iframe className='media-item-iframe' src={mediaInfo.url} />
        </div>
      </Card>
    );
  }

  _getMediaList() {
    return mediaList[this.state.tab] || [];
  }

  _hasMoreItems(itemsList) {
    return itemsList.length > this.state.numItemsShown;
  }

  _loadMoreItems() {
    const mediaItems = this._getMediaList();
    if (!this._hasMoreItems(mediaItems)) return;

    this.setState({ numItemsShown: this.state.numItemsShown + 1 });
  }

  render() {
    const mediaItems = mediaList[this.state.tab];
    const shownMediaItems = mediaItems.slice(0, this.state.numItemsShown);
    return (
      <div className="media-page">
        <Card zDepth={4} className='media-tabs-card'>
          <Tabs
            onChange={this._changeTab}
            value={this.state.tab}
            inkBarStyle={{height: '4px', marginTop: '-4px', backgroundColor: '#fa0209'}}
            className='media-tabs'
            tabItemContainerStyle={{backgroundColor: 'transparent'}}
          >
            <Tab label={'Annual Shows'} value={'shows'} className='media-tabs-tab' />
            <Tab label={'Competitions'} value={'competitions'} className='media-tabs-tab' />
            <Tab label={'Exhibition'} value={'performances'} className='media-tabs-tab' />
          </Tabs>
        </Card>
        <div className='media-tabs-filler' />

        <div className='media-item-list'>
          <InfiniteScroll hasMore={this._hasMoreItems(mediaItems)} loadMore={this._loadMoreItems}>
            { shownMediaItems.map(mediaItem => this._getMediaItem(mediaItem)) }
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
