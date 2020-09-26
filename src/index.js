import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Component/App';
import Trend from './Component/Trend';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/TellApp" component={App}></Route>
      <Route exact path="/trend" component={Trend}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
