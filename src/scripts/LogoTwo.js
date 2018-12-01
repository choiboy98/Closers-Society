import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Plx from 'react-plx';

import '../index.css';
import ScrollAnimation from 'react-animate-on-scroll';

const parallaxData2 = [
  {
    start: 0,
    end: 1000,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
    ],
  },
];

export default class Logo extends Component {

  render() {
    return (
      <div>
        <div style={styles.overlay_bg} />
        <div className="initial-screen-out logo-2"></div>
      </div>
    );
  }
}

const styles = {
  main_background: {
    backgroundColor: 'black',
    margin: 0,
    padding: 0,
  },
  overlay_bg: {
    padding: '3%'
  }
}

