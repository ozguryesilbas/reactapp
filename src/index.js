import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'; //providerı reduxtan import ettik
import {createStore} from 'redux';    //statelerin tutulacağı storu reduxtan import ettik
import reducer from './reducers';     //oluşturduğumuz reducerı ekledik, default index.js'i kullanacak
const store = createStore(reducer);   //reducerı kullanarak storu oluşturduk

//reduxtan sonra aşağıdaki hali aldı
//Provider projeyi reduxın içine alıyor
//privider içinde olan şeyler artık reduxla bağlanmış olur
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

//reduxtan önce aşağıdaki gibiydi
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
