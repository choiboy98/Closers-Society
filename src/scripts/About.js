import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ParallaxMousemove from 'react-parallax-mousemove'

import '../index.css';
//        <ParallaxMousemove containerStyle={styles.outter} fullHeight={true}>
//          <ParallaxMousemove.Layer layerStyle={styles.bgLayerStyle} config={{
//              xFactor: 0.1,
//              yFactor: 0.1,
//              springSettings: {
//                stiffness: 30,
//                damping: 30
//              }
//            }}>
//            <img src={require('../assets/vintage-phone.jpg')} alt="Parallax Layer" style={styles.through}></img>
//          </ParallaxMousemove.Layer>
//                  </ParallaxMousemove>

export default class About extends Component {

  render() {
    return (
      <div>
        <div className="initial-screen-out logo-2"></div>


                  <StyleRoot className="w3-container m8 l9">
          <h3 className = "about" style={styles.fontSize}>
            A society of the 
            <a href='' className='inactiveLink'> Top 1% </a>
            of elite Closers in the world. We are 
            <a href='' className='inactiveLink'> experts in advanced sales & closing psychology and techniques. </a>
             We are 
            <a href='' className='inactiveLink'> specialists </a>
             in delivering a 
            <a href='' className='inactiveLink'> high end personalized experience </a>
             with your 
             <a href='' className='inactiveLink'> prospects </a>
              on the phone to gently bring them to a close. 
          </h3>
        </StyleRoot>
      </div>
    );
  }
}

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    color: 'white',
    alignContent: 'center'
  },
  overlay_big: {
    padding: '10%'
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
    transform: 'translate(-15%, 17%)',
  },
  fontSize: {
    fontSize: "2vw",
  }
}
