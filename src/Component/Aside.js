import React, { Component } from 'react';
import '../css/Aside.css';
import Menu from '../img/hunberger.png';
import { Link } from "react-router-dom";

class Aside extends Component {
  render() {
    return (
        <nav>
          <input id="menu" type="checkbox" />
          <label for="menu" className="open"><img src={Menu} width="20px" /></label>
          <label for="menu" className="back"></label>
          <ul className="sideMenu">
            <li><Link to="./TellApp">TellSeet</Link></li>
            <li><Link to="./Trend">DashBoard</Link></li>
          </ul>
        </nav>
    ) 
  }
}
export default Aside;