//styles
import './App.css';

//pages
import Home from './pages/home/Home'
import Band from './pages/band/Band'
import Retail from './pages/retail/Retail'
import Fans from './pages/fans/Fans'

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
          <Route path='/band' element={<Band />} />
          <Route path='/retail' element={<Retail />} />
          <Route path='/fans' element={<Fans />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
