import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import ParallaxMousemove from 'react-parallax-mousemove'

import '../index.css';

export default class Client extends Component {

  render() {
    return (
      <div>
        <div className="initial-screen-out logo-2"></div>
        <div style={styles.wrapper}>
			<div className="card">
			  <div className="container">
			    <h>Are you an Entrepreneur or Business Owner that sells High-Ticket Products, Services, or Programs?</h>
			  </div>
			</div>

			<div className="card">
			  <div className="container">
			    <h>Do you have solid lead generation and social media presence that can get leads on the phone?</h>
			  </div>
			</div>

			<div className="card">
			  <div className="container">
			    <h>Do you have difficulty generating consistent results in closing your High Ticket offers?</h>
			  </div>
			</div>
		</div>

		<div className="client">
			<h>Your Story</h>
		</div>
		
		<div style={styles.wrapper}>
			<div className="card">
			  <div className="container">
			    <h>Do you not have time to close leads yourself or don’t have the time to develop advanced sales and closing strategies?</h>
			  </div>
			</div>

			<div className="card">
			  <div className="container">
			    <h>Is closing on your own taking time away from other important areas of your business such as servicing your existing customers or creating new content?</h>
			  </div>
			</div>

			<div className="card">
			  <div className="container">
			    <h>Are you devoting too much time and resources training and leading sales teams but not getting enough results to justify the investment?</h>
			  </div>
			</div>
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
    fontSize: 50,
    float: 'left',
    display: 'inline',
    width: '49%'
  },
  side: {
    float: 'left',
    fontSize: 30,
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
    transform: 'translate(50%, 60%)',
  },
  wrapper: {
  	margin: 'auto',
  	paddingLeft: '17.5vw',
  	paddingBottom: '10%'
  }
}