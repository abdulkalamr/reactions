import React from 'react';
import { connect } from 'react-redux';

const ReactionSummaryItem = ({ name, reaction, users }) => (
    <div className="reaction-summary-item">
        {reaction}
        <div className="reaction-summary-tooltip">
            <h3 className="reaction-summary-tooltip-title">{ name }</h3>
            <ul>
                {users.map((user, index) => <li key={index}>{user}</li>)}
            </ul>
        </div>
    </div>
);

const mapStateToProps = (state, props) => ({
    name: state.reactions[props.reaction].name,
    users: state.reactions[props.reaction].users
});

export default connect(mapStateToProps)(ReactionSummaryItem);