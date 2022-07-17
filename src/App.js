
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">

   <BrowserRouter>  
    <Navbar/>
       <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>

   
  </BrowserRouter>
   
      
    </div>
  );
}

export default App;
