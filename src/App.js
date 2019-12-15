import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from './redux/actions/userActions';
import { registerAuthObserver } from './services/auth';
import { getItem } from './services/database';


import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyBooks from './pages/MyBooks/';
import MyAlerts from './pages/MyAlerts/';
import MyFriendsBooks from './pages/MyFriendsBooks/';


function App() {
  const [valueISBN, setValueISBN]= useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  /**
   * dispatch redux actions (mapDispatchToProps)
   */
  const dispatch = useDispatch()
  
  /**
   * get redux state (mapStateToProps)
   */
  const user = useSelector(state => state.user); 
  
  // const handleISBNvalue = (ISBNvalue)=>{
  //   setValueISBN(ISBNvalue)
  // }

  useEffect(() => {
    const cancelObserver = registerAuthObserver(async (user) => {
      console.log("TCL: cancelObserver -> user", user)
      if (user) {
        const profile = await getItem('users', user.uid);
        if (profile) {
          // setUserRedux(profile);
          dispatch(setUser(profile))
          
        } else {
          console.log("todavía se está registrando");
        }
      } else {
        // setUserRedux(null);
        dispatch(setUser(null))
      }
      setIsLoading(false);
    })

    return () => {
      cancelObserver();
    }
  }, []);

  const isLogged = user!== null
  // ? <Route path="/" component={Home} />
  // : <Route path="/" component={Login} />;

  // if (isLoading) return <div>Loading...</div>


  
  return (
      <Router>
        <Switch>
          {isLogged && <Route path="/" exact component={MyBooks} />}
          {!isLogged && <Route path="/" exact component={Login} />}
          {!isLogged &&<Route path="/signup" component={Signup}></Route>}
          {!isLogged && <Route path="/login" component={Login}></Route>}
          {/* {user && <Route path="/user/:id" component={Home} />} */}
          <Route path="/my-books" component={MyBooks} />
          <Route path="/my-friends-books" component={MyFriendsBooks} />
          <Route path="/my-alerts" component={MyAlerts} />
          {/* <Route path="/header" component={Header} /> */}
        </Switch>
      </Router>
  );
}

export default App;
