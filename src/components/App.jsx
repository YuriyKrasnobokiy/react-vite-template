import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import Layout from "./Layout/Layout";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "styled-components";

const Home = lazy(() => import("../pages/Home/Home"));
const Products = lazy(() => import("../pages/Products/Products"));

export const themes = {
  light: {
    colors: {
      textColor: "#121417",
      secondTextColor: "#8a8a89",
      accentColor: "#0b44cd",
      secondAccentColor: "#3470ff",
      mainBgColor: "white",
    },
  },
  dark: {
    colors: {
      textColor: "white",
      secondTextColor: "#8a8a89",
      accentColor: "#0b44cd",
      secondAccentColor: "#3470ff",
      mainBgColor: "#010101",
    },
  },
};

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Layout currentTheme={currentTheme} toggleTheme={toggleTheme}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:productId/*" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};
