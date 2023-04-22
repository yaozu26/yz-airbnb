import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import 'antd/dist/reset.css'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';


import App from './App'
import '@/assets/css/index.less'
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Provider store={store}>
        <Suspense fallback="loading">
          <ThemeProvider theme={theme}>
            <HashRouter>
              <App/>
            </HashRouter>
          </ThemeProvider>
        </Suspense>
      </Provider>
  // </React.StrictMode>
);

