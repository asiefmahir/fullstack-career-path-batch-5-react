import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer/root';
import { dummyMiddleWare } from './middlewares/dummy.';
// import { fetchTaskMiddleWare } from './middlewares/fetchTask';
import thunk from 'redux-thunk'


export const store = createStore(rootReducer, applyMiddleware( thunk))