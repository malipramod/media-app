import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <App />
        </Router>
      </React.Suspense>
    </ChakraProvider>
  </React.StrictMode>
);
