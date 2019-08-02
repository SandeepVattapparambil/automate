import React, { Component } from "react";
class Room extends Component {
  render() {
    return (
      <div className="card ">
        <div className="card-content grey-text">
          <span className="card-title grey-text text-darken-4">
            {this.props.name}&nbsp;
            <span className={`status ${this.props.status}`}>
              {this.props.status}
            </span>
            <i className="material-icons left">home</i>
            <i className="material-icons right">close</i>
          </span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
      </div>
    );
  }
}
export default Room;
