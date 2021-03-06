import React, { Component } from 'react';
import Registry from '../utils/Registry';
import NVD3Chart from 'react-nvd3';
import BaseComponent from './BaseComponent';
import Loader from './Loader';
import Filter from './Filter';

export default class Chart extends BaseComponent {
  render() {

    let data = []

    // check for existing state data before fetching again
    if (!this.state.data) {
      data = this.getData();
    } else {
      data = this.state.data;
    }

    let settings = Object.assign({datum: data}, this.props.settings);

    return (
      <Loader isFeching={this.state.isFeching}>
        {this.getFilters()}
        <NVD3Chart {...settings}/>
      </Loader>
     )
  }
}

Registry.set('Chart', Chart);
