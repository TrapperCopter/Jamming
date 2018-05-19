import React, { Component } from 'react';
import logo from './logo.svg';
import './Playlist.css';

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(){
  }

  render() {
    const tracklistProps = (
      <TrackList
        tracks = {this.props.playlistTracks}
        onAdd = {this.props.onAdd}
        onRemove = {this.props.onRemove}
      />
    );
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
