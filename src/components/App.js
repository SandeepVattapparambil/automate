import React, { Component } from "react";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import Row from "./Row/Row";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import MainContentGrid from "./MainContentGrid/MainContentGrid";
import AddNewHome from "./AddNewHome/AddNewHome";
import HomeCard from "./HomeCard/HomeCard";
import AddNewRoom from "./AddNewRoom/AddNewRoom";

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

  _addNewHome = () => {
    this.setState({
      addNewHomeVisible: !this.state.addNewHomeVisible,
      showAddNewhome: false,
      newHomeName: ""
    });
  };

  _handleNewHomeInput = newHomeName => {
    this.setState({ newHomeName });
  };

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

  _generateUniqueId = () => {
    return Date.now();
  };

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

  _addRooms = () => {
    this.setState({
      addNewRoomVisible: !this.state.addNewRoomVisible
    });
  };

  _setNewRoomName = newRoomName => {
    this.setState({
      newRoomName
    });
  };

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
      home
    });
  };

  _closeAddNewRoom = () => {
    this.setState({
      addNewRoomVisible: false
    });
  };

  render() {
    return (
      <div>
        <Navbar />
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
