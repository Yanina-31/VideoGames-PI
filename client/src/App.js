import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from './components/Card/card';
import Nav from './components/Nav/nav.jsx'
import LandingPage from './components/Landingpage/landingpage.jsx';
import Order from './components/Order/order';
import Detail from './components/Detail/detail.jsx';
import Paginado from './components/Paginado/paginado.jsx'
import Create from './components/Create/create'

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path= '/app/home'>
            <Nav />
            <Order />
            <Card />
            <Paginado />
          </Route>          
          <Route exact path='/app/home/create'>
            <Nav />
            <Create />
          </Route>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/app/:id'>
            <Nav />
            <Detail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
