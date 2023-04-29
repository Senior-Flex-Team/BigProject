import { createRoot } from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';

import { StrictMode } from 'react';

import { App } from './app';
import { reportWebVitals } from './report-web-vitals';
import { store } from './context/store';

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
