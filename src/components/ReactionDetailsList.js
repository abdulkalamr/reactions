import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../utils/utils';

const ReactionDetailsList = ({ list }) => {
    return (
        <div>
            {list.map((user, index) => (
                <div key={index}>
                    {user.name}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        list: getUsers(state.reactions, state.options.reaction)
    };
};

export default connect(mapStateToProps)(ReactionDetailsList);