const userContentReactionsDefaultState = {};

const removeMyReaction = (state, userId) => {
    const newState = JSON.parse(JSON.stringify(state));
    for (let [reactionId, userIds] of Object.entries(newState)) {
        if (userIds.includes(userId)) {
            newState[reactionId] = userIds.filter((id) => id !== userId);
            break;
        }
    }
    return newState;
};

export default (state = userContentReactionsDefaultState, action) => {
    switch (action.type) {
        case 'SET_MY_REACTION':
            {
                const userId = action.userId;
                const newState = removeMyReaction(state, userId);
    
                const currentUserIds = state[action.reactionId];
                const newUserIds = [...currentUserIds, userId];
    
                return {
                    ...newState,
                    [action.reactionId]: newUserIds
                };
            }
        
        case 'REMOVE_MY_REACTION':
            {
                const newState = removeMyReaction(state, action.userId);
                return newState;
            }

        case 'SET_USER_CONTENT_REACTIONS':
            return action.userContentReactions;

        default:
            return state;
    }
};