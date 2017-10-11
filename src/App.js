/* globals window */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Wizard, StyleProvider } from 'losen';
import store from './store';
import data from './api/ansvarsrett.json';
import Intro from './pages/Intro';

import dataExport from './exports/data-export';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
    };
    this.closeIntro = this.closeIntro.bind(this);
  }

  closeIntro() {
    this.setState({ intro: false });
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.intro) {
      return (
        <StyleProvider>
          <Intro close={this.closeIntro} />
        </StyleProvider>
      );
    }

    return (
      <Provider store={store}>
        <Wizard wizard={data} exports={{ dataExport }} />
      </Provider>
    );
  }
}
