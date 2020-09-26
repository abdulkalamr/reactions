import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../contexts/context';
import DetailedListItem from './DetailedListItem';
import { getUserIds } from '../utils/utils';

const List = styled.ul`
    list-style-type: none;
    overflow-y: auto;
    padding-left: 0;
    height: 30rem;
`;

const DetailedList = ({selected}) => {
    const { userContentReactions, users } = useContext(Context);

    const userIds = getUserIds(selected, userContentReactions, users);

    return (
        <div>
            <List>
                {
                    userIds.map((id) => {
                        return (
                            <DetailedListItem
                                key={id} 
                                userId={id} 
                            />
                        );
                    })
                }
            </List>
        </div>
    );
};

export default DetailedList;