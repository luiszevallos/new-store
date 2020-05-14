import {combineReducers} from 'redux'
import colores from './colores';
import data from './data';
import modal from './modal';

export default combineReducers({
  colores,
  modal,
  data,
})