/**
 * AddNewRoom.js
 * Component for adding a new room
 */
import React, { Component } from "react";

/**
 * @class AddNewRoom
 * A component to add a new room to the collection of rooms in a home.
 * This is a stateless component
 * @param {Object} props - The input data to the component
 */
class AddNewRoom extends Component {
  /**
   * @function _handleInputChange
   * A helper to pass the room name back to parent component
   * @param {String} e - The event object containing the event data
   */
  _handleInputChange = e => {
    this.props.getRoomName(e.currentTarget.value);
  };

  /**
   * @function _addNewRoom
   * A helper to add a new room by using parent components methods through render props
   */
  _addNewRoom = () => {
    let input = document.querySelector("#roomName");
    input.value = "";
    this.props.handleAddNewRoom();
    this._handleAddNewRoom();
  };

  /**
   * @function _handleAddNewRoom
   * A helper to add a new room by calling the parent components method through render props
   */
  _handleAddNewRoom = () => {
    this.props.closeAddNewRoom();
  };

  render() {
    return (
      <div className={`card ${!this.props.visible ? "hide" : ""}`}>
        <div className="card-content grey-text">
          <span className="card-title activator grey-text text-darken-4">
            <i className="material-icons left">home</i> Add Room
            <i
              className="material-icons right"
              onClick={this._handleAddNewRoom}
            >
              close
            </i>
          </span>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="roomName"
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
              onClick={this._addNewRoom}
            >
              <i className="material-icons left">add</i>Add Room
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddNewRoom;
