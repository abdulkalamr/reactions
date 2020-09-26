import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../contexts/context';
import TopbarItem from './TopbarItem';
import { getReactionIds } from '../utils/utils';

const Topbar = styled.div`
    align-items: center;
    display: flex;
    gap: 40px;
    padding: 0 20px;
`;

const Left = styled.div`
    // align-items: center;
    display: flex;
    flex-grow: 1;
    gap: 20px;
    & > div {
        padding: 16px 0;
        &.selected{
            border-bottom: 2px solid blue;
        }
        &:hover {
            cursor: pointer;
        }
    }
`;

const Close = styled.div`
    background-color: #555;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
    }
`;

const DetailsTopbar = ({ closeModal, selected, setSelected }) => {
    const {
        reactions
    } = useContext(Context);

    const reactionIds = getReactionIds(reactions);

    return (
        <Topbar>
            <Left>
                <div
                    onClick={() => { setSelected('all'); }}
                    className={selected==='all' ? 'selected' : ''}
                >
                    All
                </div>
                {
                    reactionIds.map((id) => {
                        return (
                            <TopbarItem
                                key={id} 
                                reactionId={id}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        );
                    })
                }
            </Left>
            <Close
                onClick={closeModal}
            >
                x
            </Close>
        </Topbar>
    );
};

export default DetailsTopbar;