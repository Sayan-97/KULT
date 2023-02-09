import './App.css';
import Home from './components/Home/Home';
import IGO from './components/IGO/IGO';
import KultOffers from './components/KultOffers/KultOffers';
import Navbar from './components/Navbar/Navbar';
import Mountains from './utils/Mountains/Mountains';
import LinesBg from './utils/LinesBg/LinesBg'
import Gradient from './utils/Gradient/Gradient';

function App() {
  return (
    <>
      <Navbar />
      <Mountains />
      <LinesBg />
      <Gradient />
      <main>
        <Home />
        <KultOffers />
        <IGO />
      </main>
    </>
  );
}

export default App;
