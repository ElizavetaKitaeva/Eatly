import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import "./styles/main.scss";
import Footer from "./components/footer/Footer";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <div className="App">
   
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Menu" element={<Menu />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/Pricing" element={<Pricing />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>

        <Footer />

        <Routes>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/Pricing" element={<Pricing />}/>
          <Route path="/About-us" element={<AboutUs />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
