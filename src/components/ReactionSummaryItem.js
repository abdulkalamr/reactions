import React from 'react';
import { connect } from 'react-redux';
import { setHovered } from '../actions/options'

const ReactionSummaryItem = ({ reaction, setHovered }) => {
    const handleMouseEnter = () => {
        setHovered(reaction);
    };

    return (
        <div 
            className="reaction-summary-item" 
            data-tip data-for="userlist"
            onMouseEnter={handleMouseEnter}
        >
            {reaction}
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setHovered: (hovered) => dispatch(setHovered(hovered))
});

export default connect(undefined, mapDispatchToProps)(ReactionSummaryItem);