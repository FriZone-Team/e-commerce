import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AddProduct from "./pages/AddProduct";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "./store/user/selecters";
import { NotLogin } from "./pages/NotLogin";
import UpdateProduct from "./pages/UpdateProduct";
import Dashboard from "./dashboard/Dashboard";

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <div>
          {isLoggedIn && <Header />}
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/addProduct" element={<AddProduct />} />
                <Route
                  path="/dashboard/updateProduct/:id"
                  element={<UpdateProduct />}
                />
                <Route path="*" element={<ErrorPage />} />
              </>
            ) : (
              <>
                <Route
                  path="/auth/sign-in"
                  element={<SignInPage></SignInPage>}
                />
                <Route
                  path="/auth/sign-up"
                  element={<SignUpPage></SignUpPage>}
                />
                <Route path="*" element={<NotLogin />} />
              </>
            )}
          </Routes>
          {isLoggedIn && <Footer />}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
