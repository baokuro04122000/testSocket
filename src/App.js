import React from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TestSocket from './screens/testSocket';
 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TestSocket} />
      </Switch>
    </Router>
  );
}

export default App;
