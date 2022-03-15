import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import AllTripsPage from './pages/AllTrips';
//import NewTripsPage from './pages/NewTrip';
//import FavoritesPage from './pages/Favorites';
//import { FavoritesContextProvider } from './store/favorites-context'; //wrapped in braces so that it is the component function and not the default export.

import { FavoritesContextProvider } from './store/favorites-context'

ReactDOM.render(
  <FavoritesContextProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
 
  document.getElementById('root')
);