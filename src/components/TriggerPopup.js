import React from 'react';
import { connect } from 'react-redux';
import { getEmojiName, getEmojiNameMap } from '../utils/utils';

const TriggerPopup = ({emojiNameMap}) => {
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

export default connect(mapStateToProps)(TriggerPopup);