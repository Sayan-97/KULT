import './App.css';

import { Navbar, Mountains, LinesBg } from './utils';

import { HomePage } from './pages';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Mountains />
      <LinesBg />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
