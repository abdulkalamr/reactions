export const getReactions = (userContentReactions, reactions, users, contentID = 1) => {
    const contentSpecificReactions = {};

    const emojiMap = {};
    reactions.forEach(({ id, emoji, name }) => {
        contentSpecificReactions[emoji] = { name };

        emojiMap[id] = emoji;
    });

    const userMap = {};
    users.forEach(({ id, first_name, last_name, avatar }) => {
        userMap[id] = {
            name: `${first_name} ${last_name}`,
            avatar
        };
    });

    userContentReactions.forEach((userContentReaction) => {
        const emoji = emojiMap[userContentReaction.reaction_id];

        if (!contentSpecificReactions[emoji].users) {
            contentSpecificReactions[emoji].users = {};    
        }

        const userID = userContentReaction.user_id;
        const user = userMap[userID];
        contentSpecificReactions[emoji].users[userID] = user;
    });
    return contentSpecificReactions;
};

export const getTopReactions = (reactions) => {
    return Object.keys(reactions).slice(0, 3);
};

export const getReactionCount = (reactions) => {
    return 30;
};

export const getDetailSummary = (reactions) => {
    const detailSummary = Object.entries(reactions).map(([emoji, details]) => ([emoji, details.users.length]));
    return detailSummary;
};

export const getUsers = (reactions, reaction) => {
    if (reaction === 'all') {
        const users = {};

        Object.values(reactions).forEach((reactionDetails) => {
            reactionDetails.users
            for (const [userID, userDetails] of Object.entries(reactionDetails.users)) {
                users[userID] = userDetails;
            }
        });

        return Object.values(users);
    }

    return Object.values(reactions[reaction].users);
};

export const getUserNames = (reactions, reaction) => {
    const userDetails = Object.values(reactions[reaction].users);
    const userNames = userDetails.map((userDetail) => userDetail.name);
    console.log(userNames);
    return userNames;
};