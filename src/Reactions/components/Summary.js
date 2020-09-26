import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import Context from '../contexts/context';
import { getTotalCount, getTopReactions } from '../utils/utils';
import SummaryEmoji from './SummaryEmoji';
import HoverList from './HoverList';

const Summary = styled.div`
    // background-color: #444444;
    padding: 5px 10px;
    position:relative;
    z-index:0;
    &:hover {
        cursor: pointer;
    }
`;

export default ({ setIsOpen }) => {
    const [hovered, setHovered] = useState(undefined);

    const {
        reactions,
        userContentReactions
    } = useContext(Context);

    const count = getTotalCount(userContentReactions);
    const topReactions = getTopReactions(userContentReactions, reactions);

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <Summary
            onClick={handleClick}
        >
            {
                topReactions.map((reactionId, index) => {
                    return (
                        <SummaryEmoji
                            index={index} 
                            key={reactionId} 
                            reactionId={reactionId}
                            setHovered={setHovered} 
                        />
                    )
                })
            }
            {count}
           
            <ReactTooltip
                id="User List"
                effect="solid"
                arrowColor="transparent"
                place="bottom"
                clickable={true}
            >
                <HoverList reactionId={hovered} />
            </ReactTooltip>

        </Summary>
    );
};