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
import Signup from './pages/Signup';
import Login from './pages/Login';
import Layout from './Layout';
import MyBooks from './pages/MyBooks'
import MyFriendsBooks from './pages/MyFriendsBooks';
import SearchISBN from './components/SearchISBN';
import SearchBook from './components/SearchBook/SearchBook';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  
  /**
   * dispatch redux actions (mapDispatchToProps)
   */
  const dispatch = useDispatch()
  
  /**
   * get redux state (mapStateToProps)
   */
  const user = useSelector(state => state.user); 
  
  useEffect(() => {
    const cancelObserver = registerAuthObserver(async (user) => {
      console.log("TCL: cancelObserver -> user", user)
      if (user) {
        const profile = await getItem('users', user.uid);
        console.log("TCL: cancelObserver -> profile", profile)
        if (profile) {
          // setUserRedux(profile);
          dispatch(setUser(profile))
          console.log('profile: ', profile);
          
        } else {
          console.log("todavía se está registrando");
        }
      } else {
        // setUserRedux(null);
        console.log('null: ', null);
        dispatch(setUser(null))
      }
      setIsLoading(false);
    })

    return () => {
      cancelObserver();
    }
  }, []);

  if (isLoading) return <div>Loading...</div>
  
  const defaultRoute = user
  ? <Route path="/" component={Home} />
  : <Route path="/" component={Login} />;


  return (
    // <Layout>
      <Router>
        <Header />
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          {user && <Route path="/user/:id" component={Home} />}
          {defaultRoute}
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/MyBooks" component={MyBooks} />
          <Route path="/MyFriendsBooks" component={MyFriendsBooks} />
        </Switch>
        {/* <MyFriendsBooks /> */}
        <MyBooks />
        <SearchBook />
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
