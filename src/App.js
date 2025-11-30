import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Component/About';
import Projects from './Component/Projects';
import Services from './Component/Services';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
