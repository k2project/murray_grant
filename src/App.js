import React, { Component } from 'react';
import './App.scss';

//list pages imports before router
import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';
import Press from './pages/Press/Press';
import Masterclasses from './pages/Masterclasses/Masterclasses';
import Choreography from './pages/Choreography/Choreography';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route exact path='/biography' component={Bio}/>
                 <Route exact path='/press' component={Press}/>
                 <Route exact path='/masterclasses' component={Masterclasses}/>
                 <Route exact path='/choreography' component={Choreography}/>
           </Switch>
       </BrowserRouter>

    );
  }
}

export default App;
