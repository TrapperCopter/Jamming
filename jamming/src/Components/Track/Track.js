import React, { Component } from 'react';
import logo from './logo.svg';
import './track.css';

class Track extends Component {
  constructor(props) {
    super(props)

    this.addTrack = this.addTrack.bind(this);
  }


  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action">-</a>
    }
    return <a className="Track-action">+</a>;
  }

  addTrack(event) {
   this.props.onAdd(this.props.track);
  }

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
