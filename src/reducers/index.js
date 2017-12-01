import { combineReducers } from 'redux'
import loadProducts from '../Main/reducers/productsReducer'

const rootReducer = combineReducers ({
  products: loadProducts,
});

export default rootReducer
