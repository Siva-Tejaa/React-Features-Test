import React, { Suspense, lazy } from "react";
import "./App.css";

//HOOKS EXAMPLES LAZY LOADING
const Home = lazy(() => import("./components/Home"));
const HookUseState = lazy(() => import("./components/Hooks/HookUseState"));
const HookUseEffect = lazy(() => import("./components/Hooks/HookUseEffect"));
const HookuseContext = lazy(() =>
  import("./components/Hooks/HookContext/HookuseContext")
);
const HookuseRef = lazy(() => import("./components/Hooks/HookuseRef"));
const Optimization = lazy(() => import("./components/Hooks/Optimization"));
const Crud = lazy(() => import("./components/Crud"));

const ProductsPage = lazy(() => import("./components/ecommerce/ProductsPage"));
const ProductDetailsPage = lazy(() =>
  import("./components/ecommerce/ProductDetailsPage")
);
const CartPage = lazy(() => import("./components/ecommerce/CartPage"));

//Routing
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Loading...</h1>
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/usestate" element={<HookUseState />} />
          <Route exact path="/useeffect" element={<HookUseEffect />} />
          <Route exact path="/usecontext" element={<HookuseContext />} />
          <Route exact path="/useref" element={<HookuseRef />} />
          <Route exact path="/optimization" element={<Optimization />} />
          <Route exact path="/crud" element={<Crud />} />
          <Route exact path="/allproducts" element={<ProductsPage />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetailsPage />}
          />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
