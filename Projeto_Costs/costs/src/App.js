import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./components/layout/Container";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router >
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
