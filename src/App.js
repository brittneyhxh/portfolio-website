import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import SentimentAnalysis from './pages/Workshops/SentimentAnalysis';
// import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sentiment-analysis" element={<SentimentAnalysis />}/>
      </Routes>
    </>
  );
}

export default App;
