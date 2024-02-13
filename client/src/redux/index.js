import {applyMiddleware, createStore} from 'redux'
import counterReducer from './reducer'
import {thunk} from 'redux-thunk'



const store = createStore(counterReducer, undefined, applyMiddleware(thunk))

export default store