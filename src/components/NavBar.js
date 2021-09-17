import React from 'react';
import { Link } from 'react-router-dom';
import StocksForm from '../containers/StocksForm';

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <h1 id="home">Hilnex Stock Generator</h1>
        </Link>
        <li>
          <div className="form-container-nav">
            <StocksForm />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
