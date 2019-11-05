import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises'
import './App.css';

export default class extends Component {
  render () {
    return <Fragment>
            <Header />
            <Exercises /> 
            <Footer />
          </Fragment>
  }
}
