/**
 * HomeCard.js
 * Component for rendering the home data
 */
import React, { Component } from "react";
import "./style.css";

/**
 * @class HomeCard
 * A component to render and add new homes to the app
 * This is a stateless component
 * @param {Object} props - The input data to the component
 */
class HomeCard extends Component {
  /**
   * @function _handleDeleteHome
   * A helper to delete a home from app's state
   */
  _handleDeleteHome = () => {
    this.props.deletHome(this.props.id);
  };

  /**
   * @function _handleAddRooms
   * A helper to add new rooms to the home by taking data from 
   * the child and passing to the parent component
   */
  _handleAddRooms = () => {
    this.props.addRooms();
  };

  render() {
    return (
      <>
        <div id={this.props.id} className="card horizontal">
          <div className="card-image">
            <img
              src="https://img.icons8.com/dusk/128/000000/dog-house--v1.png"
              alt="home icon"
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {this.props.name}&nbsp;
                <span className={`status ${this.props.status}`}>
                  {this.props.status}
                </span>
                <i
                  className="material-icons right"
                  onClick={this._handleDeleteHome}
                >
                  close
                </i>
              </span>
              <div className="chip teal lighten-5">
                <img
                  src="https://img.icons8.com/dusk/64/000000/door-opened.png.png"
                  alt="Contact Person"
                />
                {this.props.rooms ? this.props.rooms.length : 0} Rooms
              </div>

              <div
                className={`chip teal lighten-5 add-rooms ${
                  !this.props.addRoomVisisble ? "" : "hide"
                }`}
                onClick={this._handleAddRooms}
              >
                <img
                  src="https://img.icons8.com/color/50/000000/add.png"
                  alt="Contact Person"
                />
                Add Rooms
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomeCard;
