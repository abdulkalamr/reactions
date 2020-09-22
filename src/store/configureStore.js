import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reactionsReducer from '../reducers/userContentReactions';
import optionsReducer from '../reducers/options';
import myReactionReducer from '../reducers/myReaction';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            reactions: reactionsReducer,
            options: optionsReducer,
            myReaction: myReactionReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};