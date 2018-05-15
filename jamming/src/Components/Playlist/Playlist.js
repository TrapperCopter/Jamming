import React, { Component } from 'react';
import logo from './logo.svg';
import './Playlist.css';

class Playlist extends Component {
  constructor(props) {
  super(props)
  this.handleNameChange = this.handleNameChange.bind(this)

  handleNameChange(){

  }

  render() {
    return (
      <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
      <TrackList />
      <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
    );
  }
  <TrackList tracks = {this.props.playlistTracks} />
  <TrackList onAdd = {this.props.onAdd} />
  <TrackList onRemove = {this.props.onRemove} />
}
}

export default Playlist;
