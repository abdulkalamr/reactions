import React from 'react';
import { connect } from 'react-redux';
import { getEmojiName, getUserNames } from '../utils/utils';

const UserListTooltip = ({ emojiName, userNames }) => {
    return (
        <div>
            <h3>{ emojiName }</h3>
            <ul>
                {userNames.map((userName) => <li key={userName}>{userName}</li>)}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    emojiName: getEmojiName(state.reactions, state.options.hovered),
    userNames: getUserNames(state.reactions, state.options.hovered)
});

export default connect(mapStateToProps)(UserListTooltip);