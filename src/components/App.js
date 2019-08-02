import React, { Component } from "react";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import Row from "./Row/Row";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import MainContentGrid from "./MainContentGrid/MainContentGrid";
import AddNewHome from "./AddNewHome/AddNewHome";
import HomeCard from "./HomeCard/HomeCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewHomeVisible: false,
      newHomeName: "",
      homes: []
    };
  }

  _addNewHome = () => {
    this.setState({
      addNewHomeVisible: !this.state.addNewHomeVisible,
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
      appliances: [],
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
      homes: homeDataClone
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
              addButtonVisisble={this.state.addNewHomeVisible}
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
                  />
                );
              })}
            </MainContentGrid>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
