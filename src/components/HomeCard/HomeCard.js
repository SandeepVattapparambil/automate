import React, { Component } from "react";
import "./style.css";

class HomeCard extends Component {
  render() {
    return (
      <div className="card horizontal">
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
              <i className="material-icons right">close</i>
            </span>
            <div className="chip teal lighten-5">
              <img
                src="https://img.icons8.com/dusk/64/000000/settings.png"
                alt="Contact Person"
              />
              {this.props.appliances.length} Appliances
            </div>
            <div className="chip teal lighten-5">
              <img
                src="https://img.icons8.com/dusk/64/000000/door-opened.png.png"
                alt="Contact Person"
              />
              {this.props.rooms.length} Rooms
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCard;
