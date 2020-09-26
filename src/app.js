import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startRemoveMyReaction, startSetAll, startSetMyReaction } from './actions/actions';
import Reactions from './Reactions/components/Reactions';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const mapStateToProps = (state) => ({
    ...state,
    containerId: 'trigger-container',
    userId: 1,
});

const mapDispatchToProps = (dispatch) => ({
    startSetMyReaction: (reactionId, userId) => dispatch(startSetMyReaction(reactionId, userId)),
    startRemoveMyReaction: (userId) => dispatch(startRemoveMyReaction(userId))
});

const ConnectedReactions = connect(mapStateToProps, mapDispatchToProps)(Reactions);

store.dispatch(startSetAll())
    .then(() => {
        ReactDOM.render((
            <Provider store={store}>
                <ConnectedReactions />
            </Provider>
        ), document.getElementById('reactions-container'));
    });





// .then(() => {
//     ReactDOM.render((
//         <Provider store={store}>  
//             <Reactions 
//                 contentId={1}
//                 userId={1}
//             />
//         </Provider>
//     ), document.getElementById('root'));
// });