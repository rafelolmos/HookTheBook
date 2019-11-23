import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';


function App() {
  
  return (
    <header>
      <Route>
        <Switch>
          <Route path="/"><Home /></Route>
          <Route path="/"><About /></Route>
        </Switch>
      </Route>
    </header>
    <div>
      <div>Create React App BoilerPlate</div>
    </div>
  )
}

export default App;
