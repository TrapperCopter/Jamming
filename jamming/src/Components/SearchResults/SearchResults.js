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
  }
}

export default SearchResults;
