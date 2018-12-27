import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import ParallaxMousemove from 'react-parallax-mousemove'

import '../index.css';

export default class Operation extends Component {

  render() {
    return (
      <div className="card-container">
        <div className="initial-screen-out logo-2"></div>
          <div className='creed' style={styles.bounce}>
              <h style={styles.color_only}>
                Close your qualified leads over the phone in 45 mins or less
              </h>
              <h style={styles.color_only}>
                <br></br>Consistently grow your Sales revenue and client portfolio
              </h>
              <p style={styles.side}>
                Closers are based around the world to cover all time zones. Converting your qualified leads 24/7. No leads left behind.
              </p>
              <h style={styles.color_only}>
                Strategic Partners
              </h>
              <p style={styles.side}>
                to the sustained, long term success of your business. We only work on a pure commission basis so we align with your business interests.
              </p>
          </div>


      </div>
    );
  }
}

const styles = {
  color_only: {
    paddingTop: '5%',
    color: 'gold'
  },
  side: {
    fontSize: "2vw",
    textAlign: 'center',
    width: '40%',
    margin: 'auto',
  },
}
