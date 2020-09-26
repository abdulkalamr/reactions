import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../contexts/context';
import { getReactionName, getUserNames } from '../utils/utils';

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

const HoverList = ({ reactionId }) => {
    const {
        reactions,
        userContentReactions,
        users
    } = useContext(Context);

    const reactionName = getReactionName(reactionId, reactions);
    const userNames = getUserNames(reactionId, userContentReactions, users)

    return (
        <div>
            <h3>{reactionName}</h3>
            <List>
                {userNames.map((userName) => <li key={userName}>{userName}</li>)}
            </List>
        </div>
    );
};

export default HoverList;