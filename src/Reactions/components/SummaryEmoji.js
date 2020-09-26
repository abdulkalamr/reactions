import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../contexts/context';
import { getEmoji } from '../utils/utils';

const SummaryEmoji = styled.span`
    // &:not(:first-child) {
    //     margin-left: -10px;
    //     position: relative;
    //     z-index: ${({index}) => -index};
    // }
`;

export default ({ index, reactionId, setHovered }) => {
    const {
        reactions
    } = useContext(Context);

    const emoji = getEmoji(reactionId, reactions);

    const handleMouseEnter = () => {
        setHovered(reactionId);
    };

    return (
        <SummaryEmoji 
            data-for="User List"
            data-tip
            index={index}
            onMouseEnter={handleMouseEnter}
        >
            {emoji}
        </SummaryEmoji>
    );
};

