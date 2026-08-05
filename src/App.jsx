import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import './App.css'
import './index.css'
import HomeCarousel from './components/home/HomeCarousel/HomeCarousel.jsx'
import AboutUs from './components/home/About Us/AboutUs.jsx'
import WhatWeDo from './components/home/What We Do/WhatWeDo.jsx'
import StatsProjects from './components/home/StatsProjects/StatsProjects.jsx'
import Footer from './components/Footer/Footer.jsx'
import AboutPage from './components/aboutPage/AboutPage.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import ContactPage from './components/contactPage/ContactPage.jsx'
import ProductsPage from './components/productPage/ProductsPage.jsx'
import GalleryPage from './components/galleryPage/GalleryPage.jsx'

function HomePage() {
  return (
    <>
      <HomeCarousel />
      <AboutUs />
      <WhatWeDo />
      <StatsProjects />
    </>
  );
}

// Αυτό το κομμάτι κάνει τη δουλειά του fade transition
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page-fade" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}