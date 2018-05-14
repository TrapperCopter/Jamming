import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }
    addTrack() {
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      }
    }
    removeTrack(this.track) {
      this.state.playlistTracks = this.state.playlistTracks.filter(track => track.id);
    }

    savePlaylist(){

    }

    updatePlaylistName(name){
      this.setState({this.playlistName: name});
    }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistTracks={this.state.playlistTracks} />
            <updatePlaylistName Playlist={this.state.onNameChange} />
            <savePlaylist Playlist={this.state.onSave} />
          </div>
        </div>
      </div>
    );
  }
}
