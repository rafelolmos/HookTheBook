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
import MyBookList from './components/MyBookList';
import Header from './components/Header/';
import SearchISBN from './components/SearchISBN';
import BookISBNSearch from './components/AddBookButton/';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Layout from './Layout';

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
  
  const handleISBNvalue = (ISBNvalue)=>{
    setValueISBN(ISBNvalue)
  }

  useEffect(() => {
    const cancelObserver = registerAuthObserver(async (user) => {
      console.log("TCL: cancelObserver -> user", user)
      if (user) {
        const profile = await getItem('profiles', user.uid);
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

  // if (isLoading) return <div>Loading...</div>
  
  return (
    <Layout>
      <Router>
        <Header />
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <div>HookTheBook - 9788482649665</div>
      <div><SearchISBN onPush={handleISBNvalue}/></div>
      <div><BookISBNSearch valueISBN={valueISBN}/></div>
      <div>{isLoading ? <div>Loading...</div> : <MyBookList />}</div>
    </Layout>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUserRedux: (user) => dispatch(setUser(user))
//   }
// }

// export default connect(null, mapDispatchToProps)(App);

export default App;
