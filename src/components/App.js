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
      addNewHomeVisible: false
    };
  }

  _addNewHome = () => {
    this.setState({
      addNewHomeVisible: !this.state.addNewHomeVisible
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
                addNewHome={this._addNewHome}
              />
              <HomeCard />
            </MainContentGrid>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
