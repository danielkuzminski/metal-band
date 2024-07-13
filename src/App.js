//styles
import './App.css';

//pages
import Home from './pages/home/Home'

//components
import Navbar from './components/navbar/Navbar';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
