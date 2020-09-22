const myReactionDefaultState = null;

export default (state = myReactionDefaultState, action) => {
    switch (action.type) {
        case 'SET_MY_REACTION':
            return action.myReaction;

        default: 
            return state;
    }
};