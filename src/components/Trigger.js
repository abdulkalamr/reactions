import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import TriggerPopup from './TriggerPopup';

const Trigger = () => {
    return (
        <div>
            <div
                className="trigger"
                data-tip
                data-for="emojis"
            >
                Like
            </div>
            <ReactTooltip
                arrowColor="transparent"
                backgroundColor="transparent"
                clickable={true}
                effect="solid"
                id="emojis"
                offset={{'top': -20}}
            >
                <TriggerPopup />
            </ReactTooltip>
        </div>
    );
};

export default connect()(Trigger);