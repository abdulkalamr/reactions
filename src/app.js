import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Reactions from './components/Reactions';
import { startSetReactions } from './actions/reactions';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
store.dispatch(startSetReactions()).then(() => {
    ReactDOM.render((
        <Provider store={store}>  
            <Reactions 
                contentId="1"
            />
        </Provider>
    ), document.getElementById('root'));
});