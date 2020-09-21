import React, {useState} from 'react';
import ReactionSummary from './ReactionSummary';
import ReactionDetails from './ReactionDetails';

export default () => {
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    return (
        <div className="reactions-container">
            <ReactionSummary 
                setDetailsOpen={setDetailsOpen}
            />
            <ReactionDetails 
                isDetailsOpen={isDetailsOpen}
                setDetailsOpen={setDetailsOpen}
            />
        </div>
    );
};