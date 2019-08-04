import React, { Component } from "react";

import Row from "../Row/Row";

class Room extends Component {
  constructor() {
    super();
    this.dropDownElement = "";
    this.instance = "";
    this.state = {
      addApplianceVisible: false,
      selectedAppliance: ""
    };
  }

  componentDidMount() {
    this.dropDownElement = document.querySelectorAll("select");
    window.M.FormSelect.init(this.dropDownElement);
  }

  _addAppliance = () => {
    this.setState({
      addApplianceVisible: !this.state.addApplianceVisible
    });
  };

  _handleApplianceSelect = e => {
    this.setState({
      selectedAppliance: e.currentTarget.value
    });
  };

  _addApplianceToRoom = () => {
    this.props.handleAddAppliances(this.state.selectedAppliance, this.props.id);
    this.setState({
      addApplianceVisible: !this.state.addApplianceVisible
    });
  };

  render() {
    return (
      <div id={this.props.id} className="card ">
        <div className="card-content grey-text">
          <span className="card-title grey-text text-darken-4">
            {this.props.name}&nbsp;
            <span className={`status ${this.props.status}`}>
              {this.props.status}
            </span>
            <i className="material-icons left">home</i>
            <i className="material-icons right">close</i>
          </span>
          <div className="chip teal lighten-5">
            <img
              src="https://img.icons8.com/dusk/64/000000/settings-3.png"
              alt="devices"
            />
            {this.props.appliances ? this.props.appliances.length : 0}{" "}
            Appliances
          </div>
          <div
            className={`chip teal lighten-5 add-rooms ${
              !this.state.addApplianceVisible ? "" : "hide"
            }`}
            onClick={this._addAppliance}
          >
            <img
              src="https://img.icons8.com/color/50/000000/add.png"
              alt="Contact Person"
            />
            Add Appliances
          </div>
          <Row>
            <div
              className={`input-field col s12 m8 ${
                this.state.addApplianceVisible ? "" : "hide"
              }`}
            >
              <select
                className="icons"
                onChange={e => this._handleApplianceSelect(e)}
              >
                <option value="" disabled defaultValue selected>
                  Select an appliance
                </option>
                <option
                  value="1"
                  data-icon="https://img.icons8.com/dusk/64/000000/lamp.png"
                >
                  Lamp
                </option>
                <option
                  value="2"
                  data-icon="https://img.icons8.com/dusk/64/000000/air-conditioner.png"
                >
                  AC
                </option>
                <option
                  value="3"
                  data-icon="https://img.icons8.com/officel/64/000000/blind-down.png"
                >
                  Curtains
                </option>
              </select>
              <label>Appliances</label>
            </div>
            <div
              className={`input-field col s12 m2 ${
                this.state.addApplianceVisible ? "" : "hide"
              }`}
            >
              <button
                className={`waves-effect waves-light btn ${
                  this.state.selectedAppliance !== "" ? "" : "disabled"
                }`}
                onClick={this._addApplianceToRoom}
              >
                <i className="material-icons">add</i>
              </button>
            </div>
          </Row>
          <Row>
            <ul
              className={`collection ${
                this.props.appliances.length > 0 ? "" : "hide"
              }`}
            >
              {this.props.appliances.map((appliance, key) => {
                return (
                  <li key={key} className="collection-item avatar">
                    <img src={appliance.img} alt="" className="circle" />
                    <span className="title"> {appliance.name}</span>
                    <p>{appliance.desc}</p>
                    <div className="secondary-content">
                      <div className="switch right">
                        <label>
                          Off
                          <input type="checkbox" />
                          <span className="lever" />
                          On
                        </label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Row>
        </div>
      </div>
    );
  }
}
export default Room;
