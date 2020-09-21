export const getReactions = (userContentReactions, reactions, users, contentID = 1) => {
    const contentSpecificReactions = {};

    const emojiMap = {};
    reactions.forEach(({ id, emoji, name }) => {
        contentSpecificReactions[emoji] = { name };

        emojiMap[id] = emoji;
    });

    const userNameMap = {};
    users.forEach(({ id, first_name, last_name }) => {
        userNameMap[id] = `${first_name} ${last_name}`;
    });

    userContentReactions.forEach((userContentReaction) => {
        const emoji = emojiMap[userContentReaction.reaction_id];
        const userName = userNameMap[userContentReaction.user_id];

        if (!contentSpecificReactions[emoji].users) {
            contentSpecificReactions[emoji].users = [];    
        }
        
        contentSpecificReactions[emoji].users.push(userName);
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
    console.log(detailSummary);
    return detailSummary;
};

export const getList = (reactions, reaction) => {
    if (reaction === 'all') {
        let list = [];

        Object.values(reactions).forEach((reactionDetails) => {
            list = list.concat(reactionDetails.users)
        });

        return list;
    }

    return reactions[reaction].users;
};