export const getUserContentReactions = (data) => {
    const userContentReactions = {};

    data.forEach((dataItem) => {
        const reactionId = dataItem.reaction_id;
        if (!userContentReactions[reactionId]) {
            userContentReactions[reactionId] = [];
        }
        const userId = dataItem.user_id;
        userContentReactions[reactionId].push(userId);
    });

    return userContentReactions;
};

export const getReactions = (data) => {
    const reactions = {};

    data.forEach(({ id, name, emoji }) => {
        reactions[id] = { name, emoji };
    });

    return reactions;
};

export const getUsers = (data) => {
    const users = {};

    data.forEach(({id, first_name, last_name, avatar}) => {
        users[id] = { 
            name: `${first_name} ${last_name}`,
            avatar
        };
    });

    return users;
};