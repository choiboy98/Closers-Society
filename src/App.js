import React, { Component } from 'react';
import { Pager } from "react-bootstrap";

import './index.css';

import Plx from 'react-plx';
import ReactPageScroller from "react-page-scroller";

import AboutClass from './scripts/About';
import LogoOneClass from './scripts/Logo';
import CreedClass from './scripts/Creed';
import ClientClass from './scripts/Client';
import OperationClass from './scripts/Operation';
import WhyClass from './scripts/Why';

import LandingClass from './scripts/Landing';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pages: ["Home", "About", "Motto", "Customer", "How It Works", "Why Work with Us?"]
    };
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  }

  pageOnChange = (number) => {
    this.setState({currentPage: number});
  }

  getPagesNumbers = () => {

    const pageNumbers = [];

    for (let i = 1; i <= 6; i++) {
        pageNumbers.push(
            <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}><div className="pager">{this.state.pages[i - 1]}</div></Pager.Item>
        )
    }

    return [...pageNumbers];
  }

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <div style={styles.main_background} className="w3-container">
            <LandingClass/>
            <AboutClass/>
            <CreedClass/>
            <ClientClass/>
            <OperationClass/>
            <WhyClass/>
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