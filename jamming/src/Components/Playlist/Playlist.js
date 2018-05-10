import React, { Component } from 'react';
import logo from './logo.svg';
import './Playlist.css';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <TrackList />
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
</div>
    );
  }
  <TrackList tracks = {this.props.playlistTracks} />
}

export default Playlist;
