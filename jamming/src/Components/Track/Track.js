import React, { Component } from 'react';
import logo from './logo.svg';
import './track.css';

class Track extends Component {

renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action">-</a>
    }
    return <a className="Track-action">+</a>;
  }

    addTrack() {
        <Playlist onAdd = {this.props.track} />
    }

    constructor(props) {
      super(props)
    }
    this.addTrack = this.addTrack.bind(this)

    render() {
    <div className="Track">
    <div className="Track-information">
      <h3><!-- track name will go here --></h3>
      <p><!-- track artist will go here--> | <!-- track album will go here --></p>
    </div>
    <a className="Track-action"><!-- + or - will go here --></a>
  </div>
  <TrackList onAdd = {this.props.onAdd} />
  }
}

export default Track;
