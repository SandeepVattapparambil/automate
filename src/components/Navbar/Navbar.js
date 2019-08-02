import React, { Component } from "react";
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="white">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo grey-text">
              &nbsp;Automate
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
