import { combineReducers } from 'redux';
import searchedStockReducer from './searchedStock';
import mountedStocksReducer from './mountedStocks';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  searchedStock: searchedStockReducer,
  mountedStocks: mountedStocksReducer,
  filter: filterReducer,
});

export default rootReducer;
