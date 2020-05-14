import React from 'react';
import App2 from './Routes/App';
import rootReducers from './Reducers/index';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducers,
  composeWithDevTools(),
);

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <App2 />
      </React.StrictMode>
    </Provider>
  );
}

export default App;
