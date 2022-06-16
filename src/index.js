import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './store/store';
import { GlobalStyle } from './styles/reset-style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>

      <GlobalStyle />
      <App />
    </PersistGate>

    </Provider>
);