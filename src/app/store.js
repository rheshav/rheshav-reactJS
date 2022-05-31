import { combineReducer, createStore } from 'redux';

let rootReducers = combineReducer({
  counter: counterReducer,
});

let store = createStore();
