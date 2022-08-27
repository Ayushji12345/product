import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Addproduct from './Addproduct';
import Login from './components/Login';



function App() {
  return (
    <div className="App">

<Routes>
        <Route path="home" element={<Home/>} />
        <Route path="add" element={<Addproduct />} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
