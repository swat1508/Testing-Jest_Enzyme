import React from 'react';
import ReactDom from 'react-dom';
//import App from './components/App';
import App from 'components/App';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducers from 'reducers';
import Root from 'root';



ReactDom.render(
<Root>
<App/>
</Root>,
 document.querySelector('#root'));