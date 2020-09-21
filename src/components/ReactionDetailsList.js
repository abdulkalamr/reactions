import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../utils/utils';

const ReactionDetailsList = ({ list }) => {
    return (
        <div>
            {list.map((user) => (
                <div key={user}>
                    {user}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        list: getList(state.reactions, state.options.reaction)
    };
};

export default connect(mapStateToProps)(ReactionDetailsList);