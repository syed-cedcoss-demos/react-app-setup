import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './app/store';

const root = createRoot(document.getElementById('root') as HTMLElement);
const App = lazy(() => import('./App'));
const persister = persistStore(store);

root.render(
  <StrictMode>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persister}>
        <Provider store={store}>
          <Suspense fallback={<>Loading...</>}>
            <App />
          </Suspense>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </StrictMode>
);
