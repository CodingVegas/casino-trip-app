import { Routes, Route } from 'react-router-dom';

import AllTripsPage from './pages/AllTrips';
import NewTripsPage from './pages/NewTrip';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<AllTripsPage />} />
          <Route path='/new-trip' element={<NewTripsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>
  );
}

export default App;
