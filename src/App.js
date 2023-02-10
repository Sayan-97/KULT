import './App.css';

import {Navbar, Mountains, LinesBg } from './utils';

import { HomePage } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Mountains />
      <LinesBg />
      <main>
        <HomePage />
      </main>
    </>
  );
}

export default App;
