import React from 'react';
import ReactDOM from 'react-dom';
import '../../AppCSS/Home/index.css';
import App from './App';
import registerServiceWorker from '../../Components/registerServiceWorker';

ReactDOM.render(
    <App></App>, 
    document.getElementById('root'));
registerServiceWorker();
