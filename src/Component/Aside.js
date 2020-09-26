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
            <li><Link to="./TellApp">TELシート</Link></li>
            <li><Link to="./Trend">TEL結果</Link></li>
            <li>使用中トーク</li>
            <li>ページ4</li>
            <li>ページ5</li>
            <li>ページ6</li>
          </ul>
        </nav>
    )
  }
}
export default Aside;