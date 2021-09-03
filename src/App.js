import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import Details from './components/Details';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/details" exact component={Details} />
          <Route path="/details/:stock" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
