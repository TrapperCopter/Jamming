import React, { Component } from 'react';
import logo from './logo.svg';
import './track.css';

class Track extends Component {
  render() {
    <div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a className="Track-action"><!-- + or - will go here --></a>
</div>

renderAction = function() {
    if (isRemoval === true) {
      return -;
    }
      else if (isRemoval === false) {
        return +;
        className  = Track-action;
      }
    }
  }
}


export default Track;
