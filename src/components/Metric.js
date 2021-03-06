import React, { Component } from 'react';
import Registry from '../utils/Registry';
import BaseComponent from './BaseComponent';
import Loader from './Loader';

export default class Metric extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, {
      metric: 0,
    }, this.state);
  }

  getMetric(data) {
    return this[this.props.metric](data);
  }

  render() {
    let style = {
      background: this.props.background,
    };

    let metric = 'No Data';
    if (this.state.data) {
      metric = this.getMetric(this.state.data);
    };
    
    style = Object.assign({}, style, this.props.style);
    return (
      <Loader isFeching={this.state.isFeching}>
        <div className="metric" style={style}>
          <div className="col-sm-3 col-lg-4">
            <div className="card-metric-icon"><span className={this.props.iconClass}></span></div>
          </div>
          <div className="col-sm-9 col-lg-8">
            <div className="card-metric-number">
            {metric}
            </div>
            <div className="card-metric-caption">
            {this.props.caption}
            </div>
          </div>
        </div>
      </Loader>
    )
  }
}

Registry.set('Metric', Metric);
