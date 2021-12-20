import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import showInfoReducer from 'store/reducers/showInfoReducer';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  showInfo: showInfoReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
