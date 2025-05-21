import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

 
createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={configureStore({})}>
      <App />
    </Provider>
  // {/* </StrictMode> */}
);
 
 