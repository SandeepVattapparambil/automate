/**
 * MainContentGrid.js
 * Materializecss column grid component
 */
import React, { Component } from "react";

/**
 * @class MainContentGrid
 * Materializecss column grid component
 * This component uses the col s12 m8 grid class with an offset class offset-m2
 * This is a stateless component, it renders all the input passed in as its children
 * @param {Object} props - The input data to the component
 */
class MainContentGrid extends Component {
  render() {
    return (
      <div className="col s12 m8 offset-m2 main-content-grid">
        {this.props.children}
      </div>
    );
  }
}
export default MainContentGrid;
