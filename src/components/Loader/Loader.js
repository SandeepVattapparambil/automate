/**
 * Loader.js
 * Materializecss loader component
 */
import React, { Component } from "react";

/**
 * @class Loader
 * Materializecss loader component
 * This component uses the loader component from materializecss
 * This is a stateless component
 * @param {Object} props - The input data to the component
 */
class Loader extends Component {
  render() {
    return (
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    );
  }
}
export default Loader;
