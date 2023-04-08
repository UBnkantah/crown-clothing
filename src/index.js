import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { UserProvider } from './context/UserContext';
import { CategoriesProvider } from './context/CategoriesContext';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      {/* <UserProvider> */}
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      {/* </UserProvider> */}
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
