import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../contexts/context';
import { getUserDetails } from '../utils/utils';

const LI = styled.div`
    align-items: center;
    display: flex;
    gap: 16px;
    padding: 16px;
`;

const Avatar = styled.img`
    border-radius: 32px;
`;

const DetailedListItem = ({ userId }) => {
    const { users } = useContext(Context);

    const { avatar, name } = getUserDetails(userId, users);

    return (
        <LI>
            <Avatar 
                src={avatar}
                width="64"
                height="64"
            />
            <span>{name}</span>
        </LI>
    );  
};

export default DetailedListItem;