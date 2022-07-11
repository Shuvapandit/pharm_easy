import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Nav from './pages/Shared/Navbar/Nav';



function App() {
  return (
    <div className="App">
    <Nav></Nav>
    <Routes>
        <Route path="/home" element={<Home />} />
       
      </Routes>
    
    </div>
  );
}

export default App;
