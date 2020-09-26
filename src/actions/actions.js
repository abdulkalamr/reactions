import { 
    getUserContentReactions,
    getReactions,
    getUsers
} from '../utils/utils';

const setUserContentReactions = (userContentReactions) => ({
    type: 'SET_USER_CONTENT_REACTIONS',
    userContentReactions
});

const setReactions = (reactions) => ({
    type: 'SET_REACTIONS',
    reactions
});

const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});

export const startSetAll = () => {
    return (dispatch) => {
        const userContentReactionsEndpoint = 'https://my-json-server.typicode.com/artfuldev/json-db-data/user_content_reactions?content_id=1';
        const setUserContentReactionsPromise = fetch(userContentReactionsEndpoint)
            .then((response) => response.json())
            .then((data) => {
                const userContentReactions = getUserContentReactions(data);
                dispatch(setUserContentReactions(userContentReactions)); 
            });

        const reactionsEndpoint = 'https://my-json-server.typicode.com/artfuldev/json-db-data/reactions';
        const setReactionsPromise = fetch(reactionsEndpoint)
            .then((response) => response.json())
            .then((data) => {
                const reactions = getReactions(data);
                dispatch(setReactions(reactions));
            });

        const usersEndpoint = 'https://my-json-server.typicode.com/artfuldev/json-db-data/users';
        const setUsersPromise = fetch(usersEndpoint)
            .then((response) => response.json())
            .then((data) => {
                const users = getUsers(data);
                dispatch(setUsers(users));
            });

        return Promise.all([setUserContentReactionsPromise, setReactionsPromise, setUsersPromise]);
    }
};

const setMyReaction = (reactionId, userId) => ({
    type: 'SET_MY_REACTION',
    reactionId,
    userId
});

export const startSetMyReaction = (reactionId, userId) => {
    return (dispatch) => {
        const userContentReactionsEndpoint = 'https://my-json-server.typicode.com/artfuldev/json-db-data/user_content_reactions';
        fetch(userContentReactionsEndpoint, {
            method: 'POST',
            body: { test: 'test' }
        })
            .then(() => {
                dispatch(setMyReaction(reactionId, userId));
            }) 
    };
};

const removeMyReaction = (userId) => ({
    type: 'REMOVE_MY_REACTION',
    userId
});

export const startRemoveMyReaction = (userId) => {
    return (dispatch) => {
        debugger;
        const userContentReactionsEndpoint = 'https://my-json-server.typicode.com/artfuldev/json-db-data/user_content_reactions';
        fetch(userContentReactionsEndpoint, {
            method: 'DELETE',
        })
            .then(() => {
                dispatch(removeMyReaction(userId));
            }) 
    };
};