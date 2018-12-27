import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Plx from 'react-plx';

import '../index.css';

export default class Lading extends Component {

  render() {
    return (
        <div className="initial-screen-in logo-1"></div>
    );
  }
}

const styles = {
  main_background: {
    opacity: 1,
  },
  overlay_bg: {
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}