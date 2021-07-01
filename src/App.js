import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TearSheet from './TearSheet';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/tearsheet">
            <TearSheet/>
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;