import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>,
  rootElement
);
