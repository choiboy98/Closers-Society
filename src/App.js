import React, { Component } from 'react';
import './index.css';
import LogoClass from './scripts/Logo';
import Particles from 'react-particles-js';
import Logo from './assets/logo_plain.svg';

export default class App extends Component {
  render() {
    return (
      <div className="App" style={styles.main_background}>
        <Particles
            params={{
              "fps_limit": 28,
              "particles": {
                  "number": {
                      "value": 400,
                      "density": {
                          "enable": false
                      }
                  },
                  "color": {
                    "value": "ffb400"
                  },
                  "line_linked": {
                      "enable": true,
                      "distance": 30,
                      "opacity": 0.4
                  },
                  "move": {
                      "speed": 0.3
                  },
                  "opacity": {
                      "anim": {
                          "enable": true,
                          "opacity_min": 0.05,
                          "speed": 2,
                          "sync": false
                      },
                      "value": 0.4
                  }
              },
              "polygon": {
                  "enable": true,
                  "scale": 0.5,
                  "type": "inline",
                  "move": {
                      "radius": 5
                  },
                  "url": Logo,
                  "inline": {
                      "arrangement": "equidistant"
                  },
                  "draw": {
                      "enable": false,
                      "stroke": {
                          "color": "gold"
                      }
                  }
              },
              "retina_detect": false,
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "bubble"
                      }
                  },
                  "modes": {
                      "bubble": {
                          "size": 10,
                          "distance": 100
                      }
                  }
              }
          }} />

        <h1 className = "header"> The Closers Society </h1>
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
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}