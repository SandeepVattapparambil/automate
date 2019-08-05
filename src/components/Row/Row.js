/**
 * Row.js
 * Materializecss grid Row component
 */
import React, { Component } from "react";

/**
 * @class MainContentGrid
 * Materializecss grid Row component
 * This component uses the Row component from materializecss
 * This is a stateless component, it renders all the input passed in as its children
 * @param {Object} props - The input data to the component
 */
class Row extends Component {
  render() {
    return <div className="row">{this.props.children}</div>;
  }
}
export default Row;
