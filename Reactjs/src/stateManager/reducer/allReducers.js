import { combineReducers } from 'redux';
import productsReducer from './index';


const rootReducer = combineReducers({
    products: productsReducer,
  
});

export default rootReducer;