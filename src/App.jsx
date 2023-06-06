import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <div className="blog">
      <BrowserRouter>
        <nav>
          <div>
            <h1>OSL School</h1>
          </div>
          <div className="links">
            <Link className="link" to={"/"}> Home</Link>
            <Link className="link"to={"/about"}> About</Link>
            <Link className="link"to={"contacts"}> Contacts</Link>
            <Link className="link"to={"/services"}> Services</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
