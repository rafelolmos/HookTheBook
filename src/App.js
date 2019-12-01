import React from 'react';
import {
  BrowserRouter as Route,
  Switch,

} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import MyBookList from './components/MyBookList';


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
      <div>HookTheBook</div>
      <div><MyBookList /></div>

    </div>
    </>
  )
}

export default App;
