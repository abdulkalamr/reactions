import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Context from '../contexts/context';
import Popup from './TriggerPopup';
import { getReactionDetails, getReactionId } from '../utils/utils';

const Container = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const Trigger = ({ containerId }) => {
    const {
        startRemoveMyReaction,
        startSetMyReaction,
        reactions,
        userContentReactions,
        userId
    } = useContext(Context);

    const reactionId = getReactionId(userId, userContentReactions);

    let content;
    if (reactionId) {
        const { name, emoji } = getReactionDetails(reactionId, reactions);

        content = `${emoji} ${name}`;
    } else {
        content = 'Like';
    }

    const handleClick = () => {
        if (reactionId) {
            startRemoveMyReaction(userId);
        } else {
            startSetMyReaction(1, userId)
        }
    };

    const jsx = (
        <Container
            data-tip
            data-for="Trigger"
            onClick={handleClick}
        >
            {content}
            <Popup />
        </Container>
    );

    return ReactDOM.createPortal(jsx, document.getElementById(containerId));
};

export default Trigger;