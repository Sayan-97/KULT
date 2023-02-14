import './App.css';

import { Navbar, Mountains, LinesBg, GlassOverlay } from './utils';

import { HomePage } from './pages';

function App() {
  return (
    <>
        <GlassOverlay />
        <Mountains />
        <LinesBg />
        <Navbar />
        <main>
          <HomePage />
        </main>
    </>
  );
}

export default App;
