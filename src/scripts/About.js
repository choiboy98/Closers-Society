import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ParallaxMousemove from 'react-parallax-mousemove'

import '../index.css';

const text = "A society of the Top 1% of elite Closers in the world. We are experts in advanced sales & closing psychology and techniques. We are specialists in delivering a high end personalized experience with your prospects on the phoneto gently bring them to a close.";
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

{/* <div>
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
      </div> */}

export default class About extends Component {

  render() {
    return (
      <div className="card-container">
        <div className = "empty-space"></div>
        <div className="card">
          <h3 className="about">
            {text}
          </h3>
        </div>
      </div>
    );
  }
}
