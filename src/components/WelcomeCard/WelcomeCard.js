import React, { Component } from "react";

class WelcomeCard extends Component {
  _handleAddNewHome = () => {
    this.props.addNewHome();
  };

  render() {
    return (
      <div className="col s12 m6 offset-m3 card-container">
        <div className="card-panel teal">
          <span className="white-text">
            <strong>Welcome</strong> to Automate, a simple home automation
            simulation application, add a home and get started..
          </span>
        </div>
        <button
          className={`waves-effect waves-light btn ${
            !this.props.addButtonVisisble ? "" : "hide"
          }`}
          onClick={this._handleAddNewHome}
        >
          <i className="material-icons left">add</i>Add Home
        </button>
      </div>
    );
  }
}
export default WelcomeCard;
