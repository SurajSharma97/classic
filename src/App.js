import {BrowserRouter as Router, Routes,Route }from "react-router-dom"
import './App.css';
import Home from "./home/Home.jsx";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Contact from "./contact/Contact.jsx";
import Services from "./services/Services.jsx";

function App() {
  return (
  <Router>
<Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
