import React from 'react';
import {
  BrowserRouter as Route,
  Switch,

} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Button from './CountButton/Button';


function App() {
  
  return (
    <>
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

        <Button />

    </div>
    </>
  )
}

export default App;
