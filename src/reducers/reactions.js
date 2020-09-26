const reactionsDefaultState = {};

export default (state = reactionsDefaultState, action) => {
    switch (action.type) {
        case 'SET_REACTIONS':
            return action.reactions;

        default:
            return state;
    }
};