/**
 * index.js
 * The main javascript file to be attached to html fo rendering.
 * This file includes the react app source appended to the dom using the ReactDOM.render() method
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @class App
 * The main react component
 */
import App from './components/App';

/**
 * Serviceworker file
 */
import * as serviceWorker from './serviceWorker';

/**
 * Attach the App to the DOM using ReacyDOM.render()
 */
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();