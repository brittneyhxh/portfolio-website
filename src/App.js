import React from 'react';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
// import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
