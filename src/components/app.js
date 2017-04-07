import React, { Component } from 'react';
import $ from 'jquery';

export default class App extends Component {

  render() {
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
}
