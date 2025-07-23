import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AppLayout from './components/AppLayout';
import About from './components/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/home" element={<AppLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
