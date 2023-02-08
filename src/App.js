import './App.css';
import Home from './components/Home/Home';
import IGO from './components/IGO/IGO';
import KultOffers from './components/KultOffers/KultOffers';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <KultOffers />
      <IGO />
    </>
  );
}

export default App;
