import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import Details from './components/Details';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/details" exact component={Details} />
          <Route path="/details/:stock" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
