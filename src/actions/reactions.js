import { getReactions } from '../utils/utils';

const setReactions = (reactions) => ({
    type: 'SET_REACTIONS',
    reactions
});

export const startSetReactions = () => {
    return (dispatch) => {
        const reactionsPromise = fetch('https://my-json-server.typicode.com/artfuldev/json-db-data/user_content_reactions')
            .then((response) => response.json());

        const reactionDetailsPromise = fetch('https://my-json-server.typicode.com/artfuldev/json-db-data/reactions')
            .then((response) => response.json());

        const usersPromise = fetch('https://my-json-server.typicode.com/artfuldev/json-db-data/users')
            .then((response) => response.json());

        return Promise.all([reactionsPromise, reactionDetailsPromise, usersPromise])
            .then(([ userContentReactions, reactionDetails, users ]) => {
                const reactions = getReactions(userContentReactions, reactionDetails, users, 1);
                dispatch(setReactions(reactions));
            });
    }
}; 

export const setReaction = (reaction) => ({
    type: 'SET_REACTION',
    reaction
});