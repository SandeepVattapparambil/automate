/**
 * Navbar.js
 * Materializecss Navbar component
 */
import React, { Component } from "react";
import "./style.css";

/**
 * @class Navbar
 * Materializecss Navbar component
 * This component uses the Materializecss Navbar component
 * This is a stateless component
 * @param {Object} props - The input data to the component
 */
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="white">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo grey-text">
              &nbsp;{this.props.title}
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
