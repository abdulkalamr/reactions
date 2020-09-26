import React, { useState } from 'react';
import Modal from  'react-modal';
import DetailsTopbar from './DetailsTopbar';
import DetailedList from './DetailedList';

const Details = ({ modalIsOpen, setIsOpen }) => {
    const [selected, setSelected] = useState('all');

    const customStyles = {
        content : {
            backgroundColor: '#222222',
            color: '#ffffff',
            fontSize: '16px',
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          padding               : 0
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <DetailsTopbar 
                closeModal={closeModal}
                selected={selected}
                setSelected={setSelected}
            />
            <DetailedList 
                selected={selected}
            />
        </Modal>
    );
};

export default Details;