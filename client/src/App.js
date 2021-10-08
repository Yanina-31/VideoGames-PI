import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from './components/Card/card';
import Nav from './components/Nav/nav.jsx'
import LandingPage from './components/Landingpage/landingpage.jsx';
import Order from './components/Order/order';
// import Home from './components/home/home.js';
import Detail from './components/Detail/detail.jsx';
import Paginado from './components/Paginado/paginado.jsx'
import Create from './components/Create/create'

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <div className="App">
      <Route path= '/app/' component={Nav}/> 
      <Route path= '/app/home' component={Order}/>
      <Route path='/app/home/create' component={Create}/>
        <Switch>
        <Route exact path= '/app/home' component={Card}/>
          <Route exact path= '/' component={LandingPage}/>
          <Route path='/app/home' component={Paginado}/>
          {/* <Route path='/home' component={Home}/>*/}
          <Route path='/app/:id' component={Detail}/>
        </Switch>
      </div>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
