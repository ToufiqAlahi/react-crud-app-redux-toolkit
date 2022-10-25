import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Books from './Components/Books/Books';
import About from './Components/About/About';
import AddBooks from './Components/Add_Books/AddBooks';

function App() {
  return (
    <div className="App">
      <Navbar />
      
        <Routes>
          <Route exact path={"home"||"/"} element={<Home />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/add" element={<AddBooks />} />
        </Routes>
      
     
    </div>
  );
}

export default App;
