const optionsReducerDefaultState = {
    reaction: 'all', // reaction --> selected tab in reaction details popup
    hovered: null // hovered item in summary
};

export default (state = optionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_REACTION':
            return {
                ...state,
                reaction: action.reaction
            };

        case 'SET_HOVERED':
            return {
                ...state,
                hovered: action.hovered
            }

        default:
            return state;
    }
};