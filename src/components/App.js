/**
 * App.js
 * The main app starting point
 */
import React, { Component, Fragment } from "react";
import "./App.css";

/**
 * Import all the required components here
 */
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import Row from "./Row/Row";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import MainContentGrid from "./MainContentGrid/MainContentGrid";
import AddNewHome from "./AddNewHome/AddNewHome";
import HomeCard from "./HomeCard/HomeCard";
import AddNewRoom from "./AddNewRoom/AddNewRoom";
import Room from "./Room/Room";

/**
 * Appliances data
 */
import Appliances from "../lib/appliances.json";

/**
 * @class App
 * The main App class extended from Component class of react
 * @param {Object} props - The input data to the component
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewHomeVisible: false,
      addNewRoomVisible: false,
      showAddNewhome: true,
      closeNewHome: true,
      newHomeName: "",
      newRoomName: "",
      homes: []
    };
  }

  /**
   * @function _addNewHome
   * A helper method to control the visibility of add new home card
   */
  _addNewHome = () => {
    this.setState({
      addNewHomeVisible: !this.state.addNewHomeVisible,
      showAddNewhome: false,
      newHomeName: ""
    });
  };

  /**
   * @function _handleNewHomeInput
   * A helper method to set the name of the new home temperoraily before adding to the app state
   * @param {String} newHomeName  - The name of the new home
   */
  _handleNewHomeInput = newHomeName => {
    this.setState({ newHomeName });
  };

  /**
   * @function _handleAddNewHome
   * A helper method to create a new home and to the collection of homes in the app state
   */
  _handleAddNewHome = () => {
    let newHome = {
      id: this._generateUniqueId(),
      name: this.state.newHomeName,
      rooms: [],
      status: "active"
    };
    this.setState({
      homes: [...this.state.homes, newHome]
    });
  };

  /**
   * @function _generateUniqueId
   * A helper method to generate e unique id using timestamp
   */
  _generateUniqueId = () => {
    return Date.now();
  };

  /**
   * @function _deleteHome
   * A heper method to delete a home from the collection of rooms using a unique id
   * @param {Number} homeId - The unique id of the home
   */
  _deleteHome = homeId => {
    let homeDataClone = Object.assign([], this.state.homes);
    let indexToRemove;
    for (let i = 0; i < homeDataClone.length; i++) {
      if (homeDataClone[i].id === homeId) {
        indexToRemove = homeDataClone.indexOf(homeDataClone[i]);
      }
    }
    homeDataClone.splice(indexToRemove, 1);
    this.setState({
      homes: homeDataClone,
      showAddNewhome: true
    });
  };

  /**
   * @function _addRooms
   * A helper method to handle add room card visibility
   */
  _addRooms = () => {
    this.setState({
      addNewRoomVisible: !this.state.addNewRoomVisible
    });
  };

  /**
   * @function _setNewRoomName
   * A helper method to set the new rooms name temporarily in the state
   * @param {String} newRoomName - The new rooms name
   */
  _setNewRoomName = newRoomName => {
    this.setState({
      newRoomName
    });
  };

  /**
   * @function _handleAddNewRoom
   * A helper method to handle the addition of a new room to the home
   */
  _handleAddNewRoom = () => {
    let newRoom = {
      id: this._generateUniqueId(),
      name: this.state.newRoomName,
      appliances: [],
      status: "active"
    };
    let home = this.state.homes;
    home[0].rooms.push(newRoom);
    this.setState({
      homes: home,
      newRoomName: ""
    });
  };

  /**
   * @function _closeAddNewRoom
   * A helper method to close the add new room window
   */
  _closeAddNewRoom = () => {
    this.setState({
      addNewRoomVisible: false
    });
  };

  /**
   * @function _addAppliances
   * A helper method to app apliances to a room
   * @param {Number} applianceId - The unique id of the appliance
   * @param {Number} roomId - The unique id of the room
   */
  _addAppliances = (applianceId, roomId) => {
    let roomDataClone = this.state.homes[0].rooms;
    for (let i = 0; i < roomDataClone.length; i++) {
      if (roomDataClone[i].id === roomId) {
        roomDataClone[i].appliances.push(this._getApplianceInfo(applianceId));
      }
    }
    let homes = this.state.homes;
    homes[0].rooms = [...roomDataClone];
    this.setState({
      home: homes
    });
  };

  /**
   * @function _getApplianceInfo
   * A helper method to get appliance data from appliances dataset
   * @param {Number} applianceId - The unique id of the appliance
   */
  _getApplianceInfo = applianceId => {
    for (let i = 0; i < Appliances.appliances.length; i++) {
      if (Appliances.appliances[i].id === parseInt(applianceId)) {
        return Appliances.appliances[i];
      }
    }
  };

  /**
   * @function _removeRoom
   * A helper method to remove a room from the house
   * @param {Number} roomId - The unique id of the room
   */
  _removeRoom = roomId => {
    let roomDataClone = this.state.homes[0].rooms;
    let roomIndex;
    for (let i = 0; i < roomDataClone.length; i++) {
      if (roomDataClone[i].id === roomId) {
        roomIndex = roomDataClone.indexOf(roomDataClone[i]);
      }
    }
    roomDataClone.splice(roomIndex, 1);
    let homes = this.state.homes;
    homes[0].rooms = [...roomDataClone];
    this.setState({
      home: homes
    });
  };

  render() {
    return (
      <div>
        <Navbar title={"Automate"} />
        <Container>
          <Row>
            <WelcomeCard
              addNewHome={this._addNewHome}
              addButtonVisisble={this.state.showAddNewhome}
            />
            <MainContentGrid>
              <AddNewHome
                visible={this.state.addNewHomeVisible}
                addButtonVisible={
                  this.state.newHomeName && this.state.newHomeName.length > 0
                }
                addNewHome={this._addNewHome}
                getInputValue={this._handleNewHomeInput}
                handleAddNewHome={this._handleAddNewHome}
              />
              {this.state.homes.map((home, key) => {
                return (
                  <Fragment key={key}>
                    <HomeCard
                      key={key}
                      id={home.id}
                      name={home.name}
                      status={home.status}
                      appliances={home.appliances}
                      rooms={home.rooms}
                      deletHome={this._deleteHome}
                      addRooms={this._addRooms}
                      addRoomVisisble={this.state.addNewRoomVisible}
                    />
                    {home.rooms.map((room, key) => {
                      return (
                        <Room
                          key={key}
                          id={room.id}
                          name={room.name}
                          status={room.status}
                          appliances={room.appliances}
                          handleAddAppliances={this._addAppliances}
                          handleRoomDelete={this._removeRoom}
                        />
                      );
                    })}
                  </Fragment>
                );
              })}
              <AddNewRoom
                visible={this.state.addNewRoomVisible}
                getRoomName={this._setNewRoomName}
                addButtonVisible={
                  this.state.newRoomName && this.state.newRoomName.length > 0
                }
                handleAddNewRoom={this._handleAddNewRoom}
                closeAddNewRoom={this._closeAddNewRoom}
              />
            </MainContentGrid>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
