import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
