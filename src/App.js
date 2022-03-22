import './App.css';
import ListingUsers from './components/ListingUsers/ListingUsers'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ListingUsers />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
