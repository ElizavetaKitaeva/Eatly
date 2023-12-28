import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import "./styles/main.scss";


function App() {
  return (
    <div className="App">
   
      <Router>
        <Header />

        <Routes>
          <Route path="/eatly" element={<Home />}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
