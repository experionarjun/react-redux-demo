import { applyMiddleware , createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './data/reducers'; //reducers go here
import {createLogger} from 'redux-logger';

/*
  createLogger() is only a dev dependency checkout the package.json file.
  It is used to log every action and state that is dispatched.
  Useful only while development, it should be removed from the middleware before
  production build is taken also comment the createLogger import during production build.
*/

const middleware = applyMiddleware(thunk,createLogger());
const store = createStore(rootReducer,middleware);

export default store;
