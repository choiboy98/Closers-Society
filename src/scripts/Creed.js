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
export default class Creed extends Component {

  render() {
    return (
      <div>
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
    fontSize: "2vw",
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
    transform: 'translate(30%, 45%)',
  }
}
