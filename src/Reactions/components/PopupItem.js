import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../contexts/context';
import { getReactionDetails } from '../utils/utils';
 
const Item = styled.span`
    position: relative;

    &:hover {
        &::after {
            content: attr(data-content);
            font-size: 32px;
            left: -12px;
            position: absolute;
            top: -10px;
        }    
    }
`;

const PopupItem = ({reactionId}) => {
    const { reactions, startSetMyReaction, userId } = useContext(Context);

    const { emoji, name } = getReactionDetails(reactionId, reactions);

    const handleClick = (ev) => {
        ev.stopPropagation();
        startSetMyReaction(reactionId, userId);
    }

    return (
        <Item
            data-content={emoji}
            data-for="Reaction Name"
            data-tip={name}
            onClick={handleClick}
        >
            {emoji}
        </Item>
    );
};

export default PopupItem;