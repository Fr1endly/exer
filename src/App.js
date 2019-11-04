import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts'
import './App.css';

export default class extends Component {
  render () {
    return <Fragment>
      <Header />
      <Footer />
    </Fragment>
  }
}
