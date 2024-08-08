import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import FoodIntake from './components/FoodIntake';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/food-intake" element={<FoodIntake />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
