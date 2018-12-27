import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import ParallaxMousemove from 'react-parallax-mousemove'

import '../index.css';
//        <ParallaxMousemove containerStyle={styles.outter} fullHeight={true}>
            // <ParallaxMousemove.Layer layerStyle={styles.bgLayerStyle} config={{
            //     xFactor: -0.1,
            //     yFactor: -0.1,
            //     springSettings: {
            //       stiffness: 30,
            //       damping: 30
            //     }
            //   }}>
//              <img src={require('../assets/handshake.png')} alt="Parallax Layer" style={styles.through}></img>
//            </ParallaxMousemove.Layer>
//        </ParallaxMousemove>

{/* <div>
<div className="initial-screen-out logo-2"></div>
    <div className='creed' style={styles.bounce}>
      <h style={styles.title}>
        We can’t help your prospects unless we close them
      </h>
      <p style={styles.side}>
        We work with high impact and high value product & service providers looking to grow their business to the next level and generate both consistent sales and stream of qualified high ticket clients.
        <br></br>Using our High Ticket ClosingTM system & methodology, we help our business partners double or triple their closing ratios and rapidly scale their business.
      </p>
      <p style={styles.color_only}>
        Can you keep up in servicing all the clients that we close for you?
      </p>
    </div>


</div> */}
export default class Creed extends Component {

  render() {
    return (
      <div className="card-container">
        <div className="initial-screen-out"></div>
        <div className='creed'>
          <p style={styles.title}>
            We can’t help your prospects unless we close them
          </p>
          <p style={styles.side}>
            We work with high impact and high value product & service providers looking to grow their business to the next level and generate both consistent sales and stream of qualified high ticket clients.
            <br></br>Using our High Ticket ClosingTM system & methodology, we help our business partners double or triple their closing ratios and rapidly scale their business.
          </p>
          <p style={styles.color_only}>
            Can you keep up in servicing all the clients that we close for you?
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  bounce: {
    color: 'white',
    alignContent: 'center'
  },
  color_only: {
    paddingTop: '5%',
    color: 'gold'
  },
  title: {
    color: 'gold',
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
}
