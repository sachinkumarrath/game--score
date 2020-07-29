import React from "react";
import { Route, Switch, NavLink, useRouteMatch, useHistory } from "react-router-dom";

import "./App.scss";
import ScorePage from "./components/ScorePage";
import TeamScorePage from "./components/TeamScorePage";

function App(props) {
  const routeMatch = useRouteMatch()
  const routeHistory = useHistory()

  console.log('inside App', routeMatch, routeHistory)
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to={`${routeMatch.url}`}>Team scores</NavLink></li>
          <li><NavLink to={`${routeMatch.url}head-to-head`}>Head to Head scores</NavLink></li>
        </ul>
      </nav>
      <h3>CS Game Scores</h3>
      <Switch>
        <Route path={`${routeMatch.path}head-to-head`}>
          <ScorePage />
        </Route>
        <Route path={`${routeMatch.path}`}>
          <TeamScorePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
