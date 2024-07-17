//styles
import './App.css';

//pages
import Home from './pages/home/Home'

//components
import Navbar from './components/navbar/Navbar';
import Social from './components/social/Social'

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Social />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
