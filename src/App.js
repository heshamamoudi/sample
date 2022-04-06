import './App.css';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages';
import AnotherPage from './pages/AnotherPage'
import Navbar from './compnent/navbar';
function App() {
  return (
    <Router >
      <Routes>
      <Route path='/' element={<Home/>}exact/>
      <Route path='/anotherpage' element={<AnotherPage/>}exact/>
      </Routes>
      </Router>
      
    
    
  );
}

export default App;
