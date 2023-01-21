import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Nav from './pages/Shared/Navbar/Nav';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/About/About';



function App() {
  return (
    <div className="App">
    <Nav></Nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About/>} />
       
      </Routes>
      
    <Footer></Footer>
    </div>
  );
}

export default App;
