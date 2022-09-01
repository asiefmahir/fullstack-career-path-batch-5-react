import {combineReducers} from 'redux'
import { taskReducer } from './task';
import { counterReducer } from './counter';

export const rootReducer = combineReducers({
    task: taskReducer,
    counter: counterReducer
})