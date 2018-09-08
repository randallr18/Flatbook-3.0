import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router} from 'react-router-dom';
// import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import history from './history';
// import 'semantic-ui-css/semantic.min.css';

// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>,
document.getElementById('root'));
registerServiceWorker();
