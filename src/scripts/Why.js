import React, { Component } from 'react';
import { Button } from "react-bootstrap";


import ParallaxMousemove from 'react-parallax-mousemove'

import '../index.css';

export default class Creed extends Component {

  render() {
    return (
      <div>
        <div className = "empty-space"></div>
        <div className="initial-screen-out logo-2"></div>
            <div className='creed' style={styles.bounce}>
              <h style={styles.title}>
                Why Work With Us?
              </h>
              <p style={styles.side}>
                Free your time
                <br></br>Relieve stress and overwhelm
                <br></br>Stop wasting money on leads that do not convert to a paying client.
                <br></br>Elevate profile of your business with a high end, back end Closing function
              </p>
              <Button href="https://calendly.com/tylerchoihtc" target="_blank" bsSize="large">Book a Call with Us</Button>
            </div>
            <div className = "empty-space"></div>
      </div>
    );
  }
}

const styles = {
  bounce: {
    color: 'white',
    alignContent: 'center'
  },
  overlay_big: {
    padding: '5%'
  },
  color_only: {
    paddingTop: '3%',
    color: 'gold'
  },
  title: {
    color: 'gold',
    fontSize: "3vw",
    float: 'left',
    display: 'inline',
    width: '49%'
  },
  side: {
    float: 'left',
    fontSize: "2vw",
    display: 'inline',
    width: '49%'
  },
  through: {
    opacity: 0.3,
  },
  outter: {
    backgroundSize: 'cover',
    width:'100%',
    overflow: 'hidden',
  },
  bgLayerStyle: {
    position: 'absolute',
    height: '100%',
    transform: 'translate(40%, 10%)',
  },
}
