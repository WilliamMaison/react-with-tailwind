import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ui/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initStore } from './redux/store';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = initStore({ test: {} });
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
