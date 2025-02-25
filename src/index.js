import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'; // Import Chakra UI components
import App from './App'; // Import the App component from app.js

// 1. Extend the theme to include custom colors, fonts, etc.
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

// 2. Create the root element and render the App component inside ChakraProvider with custom theme
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
