import React from 'react';
import ReactionDetailsTopbar from './ReactionDetailsTopbar';
import ReactionDetailsList from './ReactionDetailsList';

export default ({ isDetailsOpen, setDetailsOpen }) => {
    const styleObject = !isDetailsOpen ? {
        display: 'none'
    } : undefined;

    return (
        <div 
            className="reaction-details-overlay" 
            style={styleObject}
        > 
            <div 
                className="reaction-details-container"
            >
                <ReactionDetailsTopbar 
                    setDetailsOpen={setDetailsOpen}
                />
                <ReactionDetailsList />
            </div>
        </div>
    );
};