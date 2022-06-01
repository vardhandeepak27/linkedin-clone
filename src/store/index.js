import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
));

export default store;