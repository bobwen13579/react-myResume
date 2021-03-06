import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App';
import Poempages from './Poempages';
import rootStore from './app/reudx/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={rootStore}>
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/poem" component={Poempages} />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
