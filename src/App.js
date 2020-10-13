import React from 'react';
import Header from './Header'
import Cards from './TinderCards';
import SwipeButtons from './SwipeButtons'
import Chats from './Chats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/chat"> <Header backButton="/" /> <Chats /> </Route>
          <Route path="/">
          <Header />
            <Cards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;