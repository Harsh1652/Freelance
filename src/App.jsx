import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index'; // this imports the homepage
import Navbar from './components/Navbar'; // import the Navbar component
import Footer from './components/footer'; // import the Footer component
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme'; // import your theme

// Import other pages (create these files as needed)
import About from './pages/about';
// import Reviews from './pages/reviews';
// import Explore from './pages/explore';
// import Gallery from './pages/gallery';
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
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          {/* <Route path="/explore" element={<Explore />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
