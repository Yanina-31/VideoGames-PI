import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from './components/Card/card';
import Nav from './components/Nav/nav.jsx'
import LandingPage from './components/Landingpage/landingpage';
import Order from './components/Order/order';
// import Home from './components/home/home.js';
// import Form from './components/form/form.js';
import Detail from './components/Detail/detail.jsx';

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <div className="App">
      <Route path= '/app/' component={Nav}/> 
      <Route path= '/app/home' component={Order}/>
        <Switch>
        <Route exact path= '/app/home' component={Card}/>
          <Route exact path= '/' component={LandingPage}/>
          {/* <Route path='/home' component={Home}/>      
          <Route path='/create' component={Form}/> */}
          <Route path='/app/:id' component={Detail}/>
        </Switch>
      </div>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
