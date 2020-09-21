import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reactionsReducer from '../reducers/userContentReactions';
import optionsReducer from '../reducers/options';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            reactions: reactionsReducer,
            options: optionsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};