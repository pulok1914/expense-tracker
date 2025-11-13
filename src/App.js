import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import AllTransection from './pages/AllTransection'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/all-transection" element={<AllTransection />}></Route>
    </Routes>
  )
}

export default App;
