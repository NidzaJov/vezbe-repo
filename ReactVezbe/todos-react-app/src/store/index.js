import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXSTENSION_COMPOSE__ || compose;

const initialState = {};

export default createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunk),
    )
)