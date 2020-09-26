import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userContentReactionsReducer from '../reducers/user-content-reactions';
import reactionsReducer from '../reducers/reactions';
import usersReducer from '../reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            userContentReactions: userContentReactionsReducer,
            reactions: reactionsReducer,
            users: usersReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};