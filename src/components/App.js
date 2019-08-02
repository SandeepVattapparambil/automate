import React, { Component } from "react";
import "./App.css";

import Navbar from "./Navbar/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3 card-container">
              <div className="card-panel teal">
                <span className="white-text">
                  <strong>Welcome</strong> to Automate, a simple home automation
                  simulation application, add a home and get started..
                </span>
              </div>
              <button className="waves-effect waves-light btn">
                <i className="material-icons left">add</i>Add Home
              </button>
            </div>

            <div className="col s12 m6 offset-m3">
              <div className="card">
                <div className="card-content grey-text">
                  <span className="card-title activator grey-text text-darken-4">
                    <i className="material-icons left">home</i> Add home
                    <i className="material-icons right">close</i>
                  </span>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="name" type="text" className="validate" />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card horizontal">
                <div className="card-image">
                  <img src="https://img.icons8.com/dusk/128/000000/dog-house--v1.png" alt="home icon" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Home Name  <span className="status active">Active</span>
                      <i className="material-icons right">close</i>
                    </span>

                    <div className="chip teal lighten-5">
                      <img src="https://img.icons8.com/dusk/64/000000/settings.png" alt="Contact Person" />
                      3 Appliances
                    </div>
                    <div className="chip teal lighten-5">
                      <img src="https://img.icons8.com/dusk/64/000000/door-opened.png.png" alt="Contact Person" />
                      4 Rooms
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
