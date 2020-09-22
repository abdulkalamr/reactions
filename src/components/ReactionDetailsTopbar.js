import React from 'react';
import { connect } from 'react-redux';
import { setReaction } from '../actions/reactions';
import { getDetailSummary } from '../utils/utils';

const ReactionDetailsTopBar = ({ detailSummary, setDetailsOpen, setReaction }) => {
    const handleClick = (emoji) => {
        setReaction(emoji);
    };

    return (
        <div className="reaction-details-topbar">
            <div className="reaction-details-summary">
                <div 
                    className="reaction-detail-summary-item"
                    onClick={() => handleClick('all')}
                >
                    All
                </div>
                {
                    detailSummary.map(([emoji, count]) => (
                        <div 
                            key={emoji}
                            className="reaction-detail-summary-item"
                            onClick={() => handleClick(emoji)}
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

const mapDispatchToProps = (dispatch) => ({
    setReaction: (reaction) => dispatch(setReaction(reaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactionDetailsTopBar);