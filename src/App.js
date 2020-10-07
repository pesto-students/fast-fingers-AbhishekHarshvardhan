import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GameEnd from './components/view/GameEnd';
import GameStart from './components/view/GameStart';
import Home from './components/view/Home';
function getPlayerScores() {
  return JSON.parse(localStorage.getItem('userScore')) || [];
}
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/end'>
          <GameEnd getPlayerScores={getPlayerScores} />
        </Route>
        <Route path='/game'>
          <GameStart getPlayerScores={getPlayerScores} />
        </Route>
        <Route exact={true} path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
