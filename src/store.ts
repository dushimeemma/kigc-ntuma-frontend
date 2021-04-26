import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const middlewares = [thunk];

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
