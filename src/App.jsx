import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar, Mountains, LinesBg, GlassOverlay } from './utils';

import { HomePage, GamepediaPage, LaunchpadPage, MarketplacePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <GlassOverlay />
      <Mountains />
      <LinesBg />
      <Navbar />
      <main>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/gamepedia' element={<GamepediaPage />} />
          <Route path='/launchpad' element={<LaunchpadPage />} />
          <Route path='/nftmarketplace' element={<MarketplacePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
