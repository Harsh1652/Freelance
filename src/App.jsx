import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index'; // this imports the homepage
import Navbar from './components/Navbar'; // import the Navbar component
import Footer from './components/footer'; // import the Footer component
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme'; // import your theme

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
          {/* Add routes for other pages */}
          <Route path="/about" element={<About />} /> 
          {/* <Route path="/explore" element={<Explore />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
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

          {/* Add more routes as needed */}

          
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
