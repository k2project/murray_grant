import React, { Component } from 'react';
import './App.scss';

//list pages imports before router
import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';
import Press from './pages/Press/Press';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
        <BrowserRouter>
            <Switch>
                 <Route exact path={`${baseUrl}/`} component={Home}/>
                 <Route exact path={`${baseUrl}/biography`} component={Bio}/>
                 <Route exact path={`${baseUrl}/press`} component={Press}/>
           </Switch>
       </BrowserRouter>

    );
  }
}

export default App;
