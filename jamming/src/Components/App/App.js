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
    this.search = this.search.bind(this);
  }
    addTrack() {
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      }
    }
    removeTrack(this.track) {
      this.state.playlistTracks = this.state.playlistTracks.filter(track => track.id);
    }
// This might be wrong, Step 63 was confusing.
    savePlaylist(){
      trackUIRs = []
    }
    search(search) {
      console.log({Spotify.search})
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
            <search SearchBar={this.state.onSearch} />
          </div>
        </div>
      </div>
    );
  }
}
