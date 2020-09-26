import React, { useContext } from 'react';
import Context from '../contexts/context';
import { getCount, getEmoji } from '../utils/utils';

const TopbarItem = ({ reactionId, selected, setSelected }) => {
    const { reactions, userContentReactions } = useContext(Context);

    const emoji = getEmoji(reactionId, reactions);
    const count = getCount(reactionId, userContentReactions);

    const handleClick = () => {
        setSelected(reactionId);
    };

    return (
        <div
            onClick={handleClick}
            className={selected===reactionId ? 'selected' : ''}
        >
            {emoji}
            {count}
        </div>
    );
};

export default TopbarItem;