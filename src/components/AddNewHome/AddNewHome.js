import React, { Component } from "react";

class AddNewHome extends Component {
  _handleAddNewHome = () => {
    this.props.addNewHome();
  };

  _handleInputChange = e => {
    this.props.getInputValue(e.currentTarget.value);
  };

  _addNewHome = () => {
    this.props.handleAddNewHome();
  };

  render() {
    return (
      <div className={`card ${!this.props.visible ? "hide" : ""}`}>
        <div className="card-content grey-text">
          <span className="card-title activator grey-text text-darken-4">
            <i className="material-icons left">home</i> Add home
            <i
              className="material-icons right"
              onClick={this._handleAddNewHome}
            >
              close
            </i>
          </span>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                required
                onChange={e => this._handleInputChange(e)}
              />
              <label htmlFor="name">Name</label>
            </div>
            <button
              className="waves-effect waves-light btn right"
              onClick={this._addNewHome}
            >
              <i className="material-icons left">add</i>Add Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddNewHome;
