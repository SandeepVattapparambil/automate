/**
 * WelcomeCard.js
 * A card cmponent created using materializecss card class
 */
import React, { Component } from "react";

/**
 * @class HomeCard
 * A component to render a welcome note and also to add a new home
 * This is a stateless component
 * @param {Object} props - The input data to the component
 */
class WelcomeCard extends Component {
  /**
   * @function _handleAddNewHome
   * A helper to toggle add new home card
   */
  _handleAddNewHome = () => {
    this.props.addNewHome();
  };

  render() {
    return (
      <div className="col s12 m6 offset-m3 card-container">
        <div className="card-panel teal">
          <span className="white-text">
            <strong>Welcome to Automate</strong>, a simple home automation
            simulation application, add a home and get started..
          </span>
        </div>
        <button
          className={`waves-effect waves-light btn ${
            this.props.addButtonVisisble ? "" : "hide"
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
