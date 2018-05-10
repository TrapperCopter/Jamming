import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            import SearchBar from '../SearchBar';
            import '../SearchBar/SearchBar.css';
            <div className="App-playlist">
            <!-- Add a SearchResults component -->
            import SearchBar from '../SearchResults';
            import '../SearchResults/SearchResults.css';
            <!-- Add a Playlist component -->
            import SearchBar from '../Playlist';
            import '../Playlist/Playlist.css';
            </div>
        </div>
      </div>

      constructor(props) {
          super(props);
          this.state = {
              searchResults: [
                 {
                  name: "Freedom",
                  artist: "Beyonce",
                  album: "Lemonade",
                  id: 1
                 },
                 {
                  name: "Stronger",
                  artist: "Kanye West",
                  album: "808's and Heartbreak",
                  id: 2
                 }
               ],
              playlistName: 'New Playlist',
              playlistTracks: [
                {
                 name: "Rock",
                 artist: "Dry Cell",
                 album: "Disconnected",
                 id: 1
                },
                {
                 name: "Cool songs",
                 artist: "Pink Floyd",
                 album: "wish you were here",
                 id: 2
                }
              ]
          };
      }
}

export default App;
