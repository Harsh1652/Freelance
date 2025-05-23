import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index'; // this imports the homepage
import Navbar from './components/Navbar'; // import the Navbar component
import Footer from './components/footer'; // import the Footer component
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme'; // import your theme
import WhatsAppButton from './components/whatsAppButton';



// Import other pages (create these files as needed)
import About from './pages/about';
import RunnerPeanutsPage from './pages/products/runnerPeanuts';
import BoldPeanutsPage from './pages/products/boldPeanuts';
import RedSkinPeanutsPage from './pages/products/redSkinPeanuts';
import BlanchedPeanutsPage from './pages/products/blanchedPeanuts';
import PeanutOilPage from './pages/products/peanutOil';
import SpanishPeanutPage from './pages/products/spanishPeanuts';
import TJPage from './pages/products/tjPeanuts';
import LongJavaPage from './pages/products/longJavaPeanuts';
import G20PeanutsPage from './pages/products/g20Peanuts';
import K6PeanutPage from './pages/products/k6Peanuts';
import MathadiPeanutPage from './pages/products/mathadiPeanuts';
import GirnarPeanutPage from './pages/products/girnarPeanuts';
import ICGV03043PeanutPage from './pages/products/icgv03043Peanuts';
import ICGV15099PeanutPage from './pages/products/icgv15099Peanuts';
import VirginiaPeanutPage from './pages/products/virginiaPeanuts'; 
import PeanutButterPage from './pages/products/peanutButter';

import HealthBenfitsPage from './pages/healthBenefits'; 
import ServicsePage from './pages/services'; 
import BlogsPage from './pages/blogs'; 
import NutProcessingPage from './pages/NutProcessing';

import ContactUs from './pages/contact';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This applies the theme's background to the entire app */}
      <BrowserRouter>
        {/* Navbar is outside Routes, so it appears on every page */}
        <Navbar />
        <Routes>

          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/products/runner-peanuts" element={<RunnerPeanutsPage />} />
          <Route path="/products/bold-peanuts" element={<BoldPeanutsPage />} />
          <Route path="/products/red-skin-peanuts" element={<RedSkinPeanutsPage />} />
          <Route path="/products/blanched-peanuts" element={<BlanchedPeanutsPage />} />
          <Route path="/products/peanut-oil" element={<PeanutOilPage />} />
          <Route path="/products/spanish-peanuts" element={<SpanishPeanutPage />} />
          <Route path="/products/tj-peanuts" element={<TJPage />} />
          <Route path="/products/long-java-peanuts" element={<LongJavaPage />} />
          <Route path="/products/g20-peanuts" element={<G20PeanutsPage />} />
          <Route path="/products/k6-peanuts" element={<K6PeanutPage />} />
          <Route path="/products/mathadi-peanuts" element={<MathadiPeanutPage />} />
          <Route path="/products/girnar-peanuts" element={<GirnarPeanutPage />} />
          <Route path="/products/icgv03043-peanuts" element={<ICGV03043PeanutPage />} />
          <Route path="/products/icgv15099-peanuts" element={<ICGV15099PeanutPage />} />
          <Route path="/products/virginia-peanuts" element={<VirginiaPeanutPage />} />
          <Route path="/products/peanut-butter" element={<PeanutButterPage />} />

        
          <Route path="/health-benefits" element={<HealthBenfitsPage />} /> 
          <Route path="/services" element={<ServicsePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/nut-processing" element={<NutProcessingPage />} />

          {/* Add more routes as needed */}

          
        </Routes>
        <Footer />
         {/* WhatsApp Button - will appear on all pages */}
         <WhatsAppButton 
          phoneNumber="+919778888339" // Your WhatsApp number
          message="Hello, I have a question about your peanut products" // Optional pre-filled message
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
