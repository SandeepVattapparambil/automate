/**
 * Room.js
 * A card cmponent created using materializecss card class
 * This component holds all the room data and adds new room to the home
 */
import React, { Component } from "react";

/**
 * Axios - is an A+ promise based ajax wrapper library
 */
import axios from "axios";
import "./style.css";

/**
 * Appliances data
 */
import Appliances from "../../lib/appliances.json";

import Row from "../Row/Row";
import Loader from "../Loader/Loader";

/**
 * @class Room
 * A component to render all the rooms of a home as well as to add new homes
 * This is a statefull component
 * @param {Object} props - The input data to the component
 */
class Room extends Component {
  constructor() {
    super();
    this.dropDownElement = "";
    this.instance = "";
    this.state = {
      addApplianceVisible: false,
      selectedAppliance: "",
      temperature: "",
      fetchingTemp: false
    };
    this.fakeServerUrl = "https://app.fakejson.com/q";
    this.payloadForServer = {
      token: "uuBxOWJt-yA9sOgjWj5ASA",
      data: {
        temperature: 30
      }
    };
  }

  /**
   * @function componentDidMount
   * @inner
   * @memberof React.Component
   * This is a lifecycle method available from React, this method is called
   * when ever the component is mounted on to the DOM for the first render
   * Here this method is used to initialize the Materialize dropdown component
   */
  componentDidMount() {
    this.dropDownElement = document.querySelectorAll("select");
    window.M.FormSelect.init(this.dropDownElement);
  }

  /**
   * @function _getTemperature
   * A helper method to fetch temerature from the fake server using axios,
   * and to set the data to the state of the component
   */
  _getTemperature = () => {
    axios({
      method: "post",
      url: this.fakeServerUrl,
      data: this.payloadForServer
    }).then(resp => {
      this.setState({
        temperature: resp.data.temperature,
        fetchingTemp: false
      });
    });
  };

  /**
   * @function _addAppliance
   * A helper method to toggle adding new appliance card visibility
   */
  _addAppliance = () => {
    this.setState({
      addApplianceVisible: !this.state.addApplianceVisible
    });
  };

  /**
   * @function _handleApplianceSelect
   * A helper method to set the selected appliance id to the state
   */
  _handleApplianceSelect = e => {
    this.setState({
      selectedAppliance: e.currentTarget.value
    });
  };

  /**
   * @function _addApplianceToRoom
   * A helper method to toggle add appliance to the room card visibility, and
   * also to pass appliance data back to the parent
   */
  _addApplianceToRoom = () => {
    this.props.handleAddAppliances(this.state.selectedAppliance, this.props.id);
    this.setState({
      addApplianceVisible: !this.state.addApplianceVisible
    });
  };

  /**
   * @function _handleApplianceState
   * A helper method to handle the state of an applaince like ON or OFF
   * @param {Number} room - The unique id of the room
   * @param {Number} device - The unique id of the device
   * @param {Object} event - The event object
   */
  _handleApplianceState = (room, device, event) => {
    if (device === "AC" && event.currentTarget.checked) {
      window.M.toast({
        html: "Fetching room temperature"
      });
      this.setState(
        {
          fetchingTemp: true
        },
        () => {
          this._getTemperature();
        }
      );
    }
    if (!event.currentTarget.checked && device === "AC") {
      this.setState({
        temperature: ""
      });
    }
    window.M.toast({
      html: `${room}: ${device} is ${
        event.currentTarget.checked ? "ON" : "OFF"
      }`
    });
  };

  /**
   * @function _removeRoom
   * A helper method to remove a room by passing the romm id
   * back to the parent and calling parent's method
   */
  _removeRoom = () => {
    this.props.handleRoomDelete(this.props.id);
  };

  /**
   * @function _changeTemp
   * A helper method to change the room temperature
   */
  _changeTemp = type => {
    let temperatureClone = parseInt(this.state.temperature);
    this.setState({
      temperature: type === "+" ? temperatureClone + 1 : temperatureClone - 1
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
            <i
              className="material-icons right pointer"
              onClick={this._removeRoom}
            >
              close
            </i>
          </span>
          <div className="chip teal lighten-5">
            <img
              src="https://img.icons8.com/dusk/64/000000/settings-3.png"
              alt="devices"
            />
            {this.props.appliances ? this.props.appliances.length : 0}
            &nbsp; Appliances
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
                {Appliances.appliances.map((appliance, key) => {
                  return (
                    <option
                      key={key}
                      value={appliance.id}
                      data-icon={appliance.img}
                    >
                      {appliance.name}
                    </option>
                  );
                })}
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
                    {this.state.fetchingTemp && appliance.type === "INC/DEC" ? (
                      <Loader />
                    ) : null}
                    {this.state.temperature !== "" ? (
                      <div
                        className={appliance.type === "INC/DEC" ? "" : "hide"}
                      >
                        <span className="temperature">
                          {this.state.temperature} °C
                        </span>
                        <button
                          className="waves-effect waves-light btn control-btn green lighten-5 green-text"
                          onClick={e => this._changeTemp("+")}
                        >
                          <i className="material-icons">add</i>
                        </button>
                        <button
                          className="waves-effect waves-light btn control-btn red lighten-5 red-text"
                          onClick={e => this._changeTemp("-")}
                        >
                          <i className="material-icons">remove</i>
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="secondary-content">
                      <div className="switch right">
                        <label>
                          Off
                          <input
                            type="checkbox"
                            onChange={e =>
                              this._handleApplianceState(
                                this.props.name,
                                appliance.name,
                                e
                              )
                            }
                          />
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
