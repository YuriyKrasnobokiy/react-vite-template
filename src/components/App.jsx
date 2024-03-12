import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { Home } from "../pages/Home/Home";
// import { Catalog } from "../pages/Catalog/Catalog";
import { Loader } from "./Loader/Loader";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));

export const theme = {
  colors: {
    textColor: "#121417",
    secondTextColor: "#8a8a89",
    accentColor: "#0b44cd",
    secondAccentColor: "#3470ff",
  },
};

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
