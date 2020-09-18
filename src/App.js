import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Browse from './pages/browse';
import * as ROUTES from './constants/routes'
export default function App() {
  return (
      <> 
      
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
      </Router>
     
      </>
     
       
  );
}


