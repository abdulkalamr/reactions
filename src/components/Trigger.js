import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import TriggerPopup from './TriggerPopup';
import { getEmojiName } from '../utils/utils';
import { setMyReaction } from '../actions/myReaction';

const Trigger = ({ emoji, emojiName, setMyReaction }) => {
    const handleClick = () => {
        if (!emoji) {
            setMyReaction('👍');
        } else {
            setMyReaction(null);
        }
    };

    return (
        <div>
            <div
                className="trigger"
                data-tip
                data-for="emojis"
                onClick={handleClick}
            >
                { emoji ? emoji : ''}
                { emojiName ? emojiName : 'Like' }
            </div>
            <ReactTooltip
                arrowColor="transparent"
                backgroundColor="transparent"
                clickable={true}
                effect="solid"
                id="emojis"
                offset={{'top': -20}}
            >
                <TriggerPopup />
            </ReactTooltip>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        emoji: state.myReaction,
        emojiName: getEmojiName(state.reactions, state.myReaction)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMyReaction: (myReaction) => dispatch(setMyReaction(myReaction))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trigger);