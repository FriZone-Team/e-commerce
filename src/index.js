import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./_reset.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/utils/constants";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </AppProvider>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
