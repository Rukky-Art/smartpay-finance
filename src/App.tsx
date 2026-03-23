import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import PersonalPage from './pages/PersonalPage.tsx'
import BusinessPage from './pages/BusinessPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import ContactPage from './pages/ContactPage.tsx'

import ComingSoonPage from './pages/ComingSoonPage.tsx'

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}
