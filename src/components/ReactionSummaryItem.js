import React from 'react';
import { connect } from 'react-redux';
import { getUserNames } from '../utils/utils';

const ReactionSummaryItem = ({ name, reaction, userNames }) => (
    <div className="reaction-summary-item">
        {reaction}
        <div className="reaction-summary-tooltip">
            <h3 className="reaction-summary-tooltip-title">{ name }</h3>
            <ul>
                {userNames.map((userName) => <li key={userName}>{userName}</li>)}
            </ul>
        </div>
    </div>
);

const mapStateToProps = (state, props) => ({
    name: state.reactions[props.reaction].name,
    userNames: getUserNames(state.reactions, props.reaction)
});

export default connect(mapStateToProps)(ReactionSummaryItem);