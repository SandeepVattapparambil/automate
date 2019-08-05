/**
 * AddNewHome.js
 * Component for adding a new home
 */
import React, { Component } from "react";

/**
 * @class AddNewHome
 * A component to add a new home to the collection of homes.
 * This is a stateless component
 * @param {Object} props - The input data to the component
 */
class AddNewHome extends Component {
  /**
   * @function _handleAddNewHome
   * A helper to add a new home by calling the parent components method through render props
   */
  _handleAddNewHome = () => {
    this.props.addNewHome();
  };

  /**
   * @function _handleInputChange
   * A helper to pass the home name back to parent component
   * @param {String} e - The event object containing the event data
   */
  _handleInputChange = e => {
    this.props.getInputValue(e.currentTarget.value);
  };

  /**
   * @function _addNewHome
   * A helper to add a new home by using parent components methods through render props
   */
  _addNewHome = () => {
    this.props.handleAddNewHome();
    let input = document.querySelector("#name");
    input.value = "";
    this._handleAddNewHome();
  };

  render() {
    return (
      <div className={`card ${!this.props.visible ? "hide" : ""}`}>
        <div className="card-content grey-text">
          <span className="card-title activator grey-text text-darken-4">
            <i className="material-icons left">home</i> Add home
            <i
              className="material-icons right"
              onClick={this._handleAddNewHome}
            >
              close
            </i>
          </span>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                required
                onChange={e => this._handleInputChange(e)}
              />
              <label htmlFor="name">Name</label>
            </div>
            <button
              className={`waves-effect waves-light btn right ${
                this.props.addButtonVisible ? "" : "disabled"
              }`}
              onClick={this._addNewHome}
            >
              <i className="material-icons left">add</i>Add Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddNewHome;
