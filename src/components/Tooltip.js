import React from 'react';
import ReactTooltip from 'react-tooltip';
import UserListTooltip from './UserListTooltip';

const Tooltip = () => {
    return (
        <div>
            <ReactTooltip
                id="common"
                effect="solid"
                arrowColor="transparent"
            />
            <ReactTooltip 
                id="userlist"
                effect="solid"
                arrowColor="transparent"
                place="bottom"
                clickable={true}
            >
                <UserListTooltip />
            </ReactTooltip>
        </div>
    );
};

export default Tooltip;