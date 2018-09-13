import React from 'react';
import logo from './assets/logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="main-heading">
        <div className="title">
          <img className="logo" src={logo} alt={"CDOT logo"}/>
          <h1>{this.props.name.toUpperCase()} </h1>
        </div>
      </div>
    );
  }
}

export default Header;