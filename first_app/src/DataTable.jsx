/* eslint-disable require-jsdoc */
import React, {Component} from 'react';

export class DataTable extends Component {
  constructor(props) {
    super();
    this.state = {
      data: new Date(),
      count: 0,
    };
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('componentDidMount');
  }
  componentDidCatch() {
    console.log('componentDidCatch');
  }
  render() {
    return (
      <div>DataTable</div>
    );
  }
}

export default DataTable;
