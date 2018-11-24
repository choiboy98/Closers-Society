import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

export default class Logo extends Component {

  render() {
    return (
      <StyleRoot>
        <div className="test" style={styles.bounce}>
        <p>hihihi</p>
        </div>
      </StyleRoot>
    );
  }
}

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}
