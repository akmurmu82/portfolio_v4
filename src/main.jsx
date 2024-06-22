import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "./customTheme";
import ThemeContextProvider from "./AllContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
