import React from 'react';
import StocksList from '../containers/StocksList';
import Filter from './Filter';

function Catalog() {
  return (
    <div className="Catalog">
      <header className="Catalog-header">
        <Filter />
        <h1>Market Overview</h1>
        <StocksList />
      </header>
    </div>
  );
}

export default Catalog;
