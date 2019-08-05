/**
 * Container.js
 * Materializecss container grid component
 */
import React, { Component } from "react";

/**
 * @class Container
 * Materializecss container grid component
 * This is a stateless component, it renders all the input passed in as its children
 * @param {Object} props - The input data to the component
 */
class Container extends Component {
  render() {
    return <div className="container"> {this.props.children} </div>;
  }
}
export default Container;
