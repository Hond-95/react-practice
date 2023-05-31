import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false} >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

