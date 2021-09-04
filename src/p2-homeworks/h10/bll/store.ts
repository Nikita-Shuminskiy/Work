import { loadingReducer } from './loadingReducer'
import { createStore, combineReducers, Dispatch } from 'redux';
import { themeReducer, ActionType } from '../../h12/bll/themeReducer'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux'


const reducers = combineReducers({
    loading: loadingReducer,
    themeReducer: themeReducer

})

export const store = createStore(reducers,applyMiddleware(thunkMiddleware))


export type AppStoreType = ReturnType<typeof reducers>
export type AppDispatchType = Dispatch<ActionType>

// @ts-ignore
window.store = store // for dev
