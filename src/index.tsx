import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const App = lazy(() => import('./App'));
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.route ?? ''}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Suspense fallback={<></>}>
            <App />
          </Suspense>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
