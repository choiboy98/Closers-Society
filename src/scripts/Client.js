import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import ParallaxMousemove from 'react-parallax-mousemove'

import '../index.css';

export default class Client extends Component {

  render() {
    return (
      <div className="card-container">
        <div className = "empty-space"></div>
        <div className="client">
          <div>Your Story</div>
        </div>
        <div>
        <div className="small-card">
          <div>
            <div className="client">Are you an Entrepreneur or Business Owner that sells High-Ticket Products, Services, or Programs?</div>
          </div>
        </div>

        <div className="small-card">
          <div >
            <div className="client">Do you have solid lead generation and social media presence that can get leads on the phone?</div>
          </div>
        </div>

        <div className="small-card">
          <div >
            <div className="client">Do you have difficulty generating consistent results in closing your High Ticket offers?</div>
          </div>
        </div>
        </div>

        <div className="empty"/>
        
        <div className="card-container">
        <div className="small-card">
          <div >
            <div className="client">Do you not have time to close leads yourself or don’t have the time to develop advanced sales and closing strategies?</div>
          </div>
        </div>

        <div className="small-card">
          <div >
            <div className="client">Is closing on your own taking time away from servicing your existing customers or creating new content?</div>
          </div>
        </div>

        <div className="small-card">
          <div >
            <div className="client">Are you devoting too much time and resources on sales teams but not getting enough results to justify the investment?</div>
          </div>
        </div>
        </div>
		</div>
    );
  }
}