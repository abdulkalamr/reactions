import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import Context from '../contexts/context';
import PopupItem from './PopupItem';
import Tooltip from './Tooltip';

const Container = styled.div`
    align-items: center;
    background-color: #ffffff;
    border-radius: 24px;
    display: flex;
    font-size: 16px;
    gap: 16px;
    height: 32px;
    padding: 0 20px;
`;

const TriggerPopup = () => {
    const {
        reactions
    } = useContext(Context);

    const reactionIds = Object.keys(reactions);

    return (
        <ReactTooltip
            arrowColor="transparent"
            backgroundColor="transparent"
            clickable={true}
            effect="solid"
            id="Trigger"
            offset={{ top: -20 }}
        >
            <Container>
                {
                    reactionIds.map((id) => {
                        return (
                            <PopupItem
                                key={id} 
                                reactionId={id}
                            />
                        );
                    })
                }
            </Container>
            <Tooltip />
        </ReactTooltip>
    );
};

export default TriggerPopup;