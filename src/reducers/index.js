import { combineReducers } from 'redux'
import loadProducts from '../Main/reducers/productsReducer'
import selected from '../Main/reducers/selected'

const rootReducer = combineReducers ({
  products: loadProducts,
  selecteds: selected
});

export default rootReducer
