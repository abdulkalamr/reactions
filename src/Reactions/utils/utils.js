export const getCount = (reactionId, userContentReactions) => {
    return userContentReactions[reactionId].length;
};

export const getEmoji = (reactionId, reactions) => {
    return reactions[reactionId].emoji;
};

export const getReactionDetails = (reactionId, reactions) => {
    return reactions[reactionId];
};

export const getReactionId = (userId, userContentReactions) => {
    const entries = Object.entries(userContentReactions);
    for (const [reactionId, userIdArr] of entries) {
        if (userIdArr.includes(userId)) {
            return reactionId;
        }
    };
};

export const getReactionIds = (reactions) => {
    return Object.keys(reactions);
};

export const getReactionName = (reactionId, reactions) => {
    if (!reactionId)  {
        return '';
    }

    return reactions[reactionId].name;
};

export const getTopReactions = (userContentReactions, reactions) => {
    const entries = Object.entries(userContentReactions);
    entries.sort((a, b) => b[1].length - a[1].length);
    
    const topReactions = [];
    for (let i=0; i<3; i++) {
        const reactionId = entries[i][0];
        topReactions.push(reactionId);
    }

    return topReactions;
};

export const getTotalCount = (userContentReactions) =>  {
    const userIdsArr = Object.values(userContentReactions);
    const count = userIdsArr.reduce((count, userIds) => {
        return count + userIds.length;
    }, 0);
    return count;
};

export const getUserNames = (reactionId, userContentReactions, users) => {
    if (!reactionId) {
        return [];
    }

    const userIds = userContentReactions[reactionId];
    const userNames = userIds.map((userId) => users[userId].name);
    return userNames;
};

export const getUserDetails = (id, users) => {
    return users[id];
};

export const getUserIds = (reactionId, userContentReactions, users) => {
    if (reactionId === 'all') {
        const userIds = [];
        const allUserIdArr = Object.values(userContentReactions);
        allUserIdArr.forEach((userIdArr) => {
            userIdArr.forEach((id) => {
                if (!userIds.includes(id)) {
                    userIds.push(id);
                }
            });
        });
        return userIds;
    }

    return userContentReactions[reactionId];
};