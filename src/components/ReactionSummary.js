import React from 'react';
import { connect } from 'react-redux';
import ReactionSummaryItem from './ReactionSummaryItem';
import { getTopReactions, getReactionCount } from '../utils/utils';

const ReactionSummary = ({ reactions, reactionCount, setDetailsOpen }) => (
    <div 
        onClick={() => {
            setDetailsOpen(true);
        }}
    >
        {reactions.map((reaction) => (
            <ReactionSummaryItem
                key={reaction}
                reaction={reaction}
            />
        ))} {reactionCount}
    </div>
);

const mapStateToProps = (state) => ({
    reactions: getTopReactions(state.reactions),
    reactionCount: getReactionCount(state.reactions)
});

export default connect(mapStateToProps)(ReactionSummary);

