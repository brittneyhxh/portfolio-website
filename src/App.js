import React from 'react';
import './styles/App.css';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Projects />
      </main>
    </div>
  );
}

export default App;
