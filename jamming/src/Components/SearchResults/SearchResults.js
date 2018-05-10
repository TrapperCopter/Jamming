import React, { Component } from 'react';
import logo from './logo.svg';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
        </div>
    );
    constructor(props) {
      super(props)
      this.state.searchResults = {
        tracks: TrackList.map({
          track.id: tracks ,
          this.props.track.name: name ,
          this.props.track.artist: artist ,
          this.props.track.album: album 
        })
    }
  }

}

export default SearchResults;
