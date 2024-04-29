import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import FormComponent from './components/FormComponent';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
    {/* <FormComponent /> */}
    <App/>
  </Provider>
  </React.StrictMode>
);


reportWebVitals();