const optionsReducerDefaultState = {
    reaction: 'all' // reaction --> selected tab in reaction details popup
};

export default (state = optionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_REACTION':
            return {
                ...state,
                reaction: action.reaction
            };

        default:
            return state;
    }
};