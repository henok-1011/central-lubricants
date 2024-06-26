import React from 'react'
import Contact from './pages/Contact'
import About from './pages/About'
import { MdHome } from 'react-icons/md'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import Footer from './components/Footer'
import Header from './components/Header';
import Knowledebase from './pages/Knowledebase';
import InsightDetail from './pages/InsightDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/knowledge-base" element={<Knowledebase />} />
        <Route path="/knowledge-base/:id" element={<InsightDetail/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App