import React from 'react';
import { connect } from 'react-redux';
import { getDetailSummary } from '../utils/utils'

const ReactionDetailsTopBar = ({ detailSummary, setDetailsOpen }) => {
    return (
        <div className="reaction-details-topbar">
            <div className="reaction-details-summary">
                <div className="reaction-detail-summary-item">All</div>
                {
                    detailSummary.map(([emoji, count]) => (
                        <div 
                            key={emoji}
                            className="reaction-detail-summary-item"
                        >
                            {emoji}
                            {count}
                        </div>
                    ))
                }
            </div>
            <div 
                className="reaction-details-close"
                onClick={() => {
                    setDetailsOpen(false)
                }}
            >
                x
            </div>
        </div>
    );
}; 

const mapStateToProps = (state) => ({
    detailSummary: getDetailSummary(state.reactions)
});

export default connect(mapStateToProps)(ReactionDetailsTopBar);