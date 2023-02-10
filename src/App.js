import './App.css';
import Navbar from './components/Navbar/Navbar';
import Mountains from './utils/Mountains/Mountains';
import LinesBg from './utils/LinesBg/LinesBg'
import Gradient from './utils/Gradient/Gradient';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Mountains />
      <LinesBg />
      <Gradient />
      <main>
        <HomePage />
      </main>
    </>
  );
}

export default App;
