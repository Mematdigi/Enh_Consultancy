import "./assets/styles/style.css";  // Import the CSS file
import "bootstrap/dist/css/bootstrap.min.css";  // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";  // Bootstrap JS

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Finance_Consulting from "./pages/Finance_Consulting";
import Digital_Marketing_Consulting from "./pages/Digital_Marketing_Consulting";
import IT_Consulting from "./pages/IT_Consulting";
import Property_Consulting from "./pages/Property_Consulting";

import Business_Consultancy from "./pages/Business_Consultancy";

import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/finance_consulting" element={<Finance_Consulting />} />
        <Route path="/digital_marketing_consulting" element={<Digital_Marketing_Consulting />} />
        <Route path="/it_consulting" element={<IT_Consulting />} />
        <Route path="/property_consulting" element={<Property_Consulting />} />
        <Route path="/business_consultancy" element={<Business_Consultancy />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
