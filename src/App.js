// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import FormComponents from './components/FormComponents';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Redux Form Example</h1>
        </header>
        <FormComponents/>
      </div>
    </Provider>
  );
};

export default App;