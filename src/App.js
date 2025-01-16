import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './component/payment';
import Success from './component/success';
import Cancel from './component/cancel';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
