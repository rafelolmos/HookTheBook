import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';

import { setUser } from './redux/actions/userActions';
import { registerAuthObserver } from './services/auth';
import { getItem } from './services/database';


import Home from './pages/Home';
import About from './pages/About';

import Header from './components/Header/';
import SearchISBN from './components/SearchISBN';
import BookISBNSearch from './components/AddBookButton/';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Layout from './Layout';
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

  // const defaultRoute = user
  // ? <Route path="/" component={Home} />
  // : <Route path="/" component={Login} />;

  // if (isLoading) return <div>Loading...</div>
  
  return (
    // <Layout>
      <Router>
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          {/* {user && <Route path="/user/:id" component={Home} />} */}
          {/* {defaultRoute} */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/my-books" component={MyBooks} />
          <Route path="/my-friends-books" component={MyFriendsBooks} />
          <Route path="/my-alerts" component={MyAlerts} />
          {/* <Route path="/header" component={Header} /> */}
        </Switch>
      {/* <div><SearchISBN onPush={handleISBNvalue}/></div>
      <div><BookISBNSearch valueISBN={valueISBN}/></div> */}
      {/* <div>{isLoading ? <div>Loading...</div> : <MyBooks />}</div> */}
      </Router>
    // </Layout>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUserRedux: (user) => dispatch(setUser(user))
//   }
// }

// export default connect(null, mapDispatchToProps)(App);

export default App;
