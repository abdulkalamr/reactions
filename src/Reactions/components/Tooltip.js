import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components'; 

const Container = styled.span`
    background-color: #161616;
    border-radius: 100px;
    color: white;
    display: inline-block;
    font-size: 12px;
    // height: 24px;
    padding: 4px 8px;
`;

const Tooltip = () => {
    return (
        <ReactTooltip
            arrowColor="transparent"
            backgroundColor="transparent"
            effect="solid"
            id="Reaction Name"
            getContent={((dataTip) => <Container>{dataTip}</Container>)}
        />
    );
};

export default Tooltip;