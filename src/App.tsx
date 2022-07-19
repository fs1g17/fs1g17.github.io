import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Navbar } from './components';
import About from './screens/About/About';
import Blog from './screens/Blog/Blog';
import Contact from './screens/Contact/Contact';
import Newsletter from './screens/Newsletter/Newsletter';
import Shop from './screens/Shop/Shop';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F0F0F',
      light: '#353535',
      dark: '#000000',
    },
    secondary: {
      main: '#E9052F',
      light: '#FF5759',
      dark: '#AE0008'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
