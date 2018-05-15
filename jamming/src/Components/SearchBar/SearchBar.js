import React, { Component } from 'react';
import logo from './logo.svg';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
  super(props)
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
  this.state = {term: ''}
}
  search() {
    this.props.onSearch(this.state.term)
  }

  handleTermChange() {
    this.setState({this.search.term: search});

  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }


export default SearchBar;
