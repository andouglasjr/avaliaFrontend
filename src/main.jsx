import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react"

//const theme = extendTheme({globalStyles})
import theme from "./theme/theme"
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.Fragment>
);