import React, { useState } from 'react';
import { Provider } from '../contexts/context';
import Summary from './Summary';
import Details from './Details';
import Trigger from './Trigger';

export default (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <Provider value={props}>
            <Summary setIsOpen={setIsOpen} />
            <Details 
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen} 
            />
            <Trigger 
                containerId={props.containerId}
            />
        </Provider>
    );
};