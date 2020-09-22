import React, {useState} from 'react';
import ReactionSummary from './ReactionSummary';
import ReactionDetails from './ReactionDetails';
import Trigger from './Trigger';
import Tooltip from './Tooltip';

export default () => {
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    return (
        <div>
            <ReactionSummary 
                setDetailsOpen={setDetailsOpen}
            />
            <ReactionDetails 
                isDetailsOpen={isDetailsOpen}
                setDetailsOpen={setDetailsOpen}
            />
            <Trigger />
            <Tooltip />
        </div>
    );
};