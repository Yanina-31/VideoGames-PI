import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingpage/landingpage.js';
import Home from './components/home/home.js';
import Form from './components/form/form.js';
import CardDetail from './components/cardDetail/cardDetail.js';

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <div className="App">
        <h1>App VideoGames</h1>
        <Switch>
          <Route exact path= '/' component={LandingPage}/>
          <Route path='/home' component={Home}/>      
          <Route path='/create' component={Form}/>
          <Route path='/videogames/:id' component={CardDetail}/>
        </Switch>
      </div>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
