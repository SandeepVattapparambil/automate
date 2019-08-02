import React, { Component } from "react";

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
