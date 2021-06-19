import React from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TestSocket from './screens/testSocket';
import socketIOClient from 'socket.io-client';
const ENDPOINT = window.location.host.indexOf('localhost') > 0
                ? 'http://localhost:8000'
                : window.location.host;
let sk = socketIOClient(ENDPOINT); 
function App() {
  sk.on('allUsers',({clients})=>{
    console.log(clients);
  })  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TestSocket} />
      </Switch>
    </Router>
  );
}

export default App;
