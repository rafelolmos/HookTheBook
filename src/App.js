import React from 'react';
import {
  BrowserRouter as Route,
  Switch,

} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
<<<<<<< HEAD
import MyBookList from './components/MyBookList';
=======
import Button from './CountButton/Button';
import CardBook from './components/CardBook';
import BookISBNSearch from './services/callAPI';
import SearchBook from './components/SearchBook';
>>>>>>> searchBook


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
<<<<<<< HEAD
      <div>HookTheBook</div>
      <div><MyBookList /></div>
=======
      <div>Create React App BoilerPlate</div>

        <Button />
        <CardBook />
        <BookISBNSearch />
        <SearchBook />
>>>>>>> searchBook

    </div>
    </>
  )
}

export default App;
