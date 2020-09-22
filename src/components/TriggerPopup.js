import React from 'react';
import { connect } from 'react-redux';
import { getEmojiName, getEmojiNameMap } from '../utils/utils';
import { setMyReaction } from '../actions/myReaction';

const TriggerPopup = ({emojiNameMap, setMyReaction}) => {
    return (
        <div className="trigger-popup">
            {Object.entries(emojiNameMap).map(([emoji, emojiName]) => {
                return (
                    <div
                        key={emoji} 
                        className="trigger-popup-item"
                        data-content={emoji}
                        data-tip={emojiName}
                        data-for="common"
                        onClick={() => setMyReaction(emoji)}
                    >
                        {emoji}
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = ({ reactions }) => {
    return {
        emojiNameMap: getEmojiNameMap(reactions)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMyReaction: (myReaction) => dispatch(setMyReaction(myReaction))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TriggerPopup);