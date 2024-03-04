import React, { useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout";
import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import axios from "axios";

export const cartContext = createContext();
const App = () => {
  const [cartState, setCartState] = useState({ data: [], loading: true });

  const getCart = () => {
    axios
      .get("https://fakestoreapi.com/carts/2")
      .then((response) => {
        setCartState({ data: response.data.products, loading: false });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  useEffect(() => {
    if (cartState.loading) {
      getCart();
    }
  }, []);

  return (
    <div className="container-fluid">
      <cartContext.Provider
        value={{
          cartState: cartState,
          setCartState: setCartState,
          getCart: getCart,
        }}
      >
        <Header />
        <Main />
        <Footer />
      </cartContext.Provider>
    </div>
  );
};

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/checkout" element={<Checkout />}></Route>
    <Route exact path="/home" element={<Home />}></Route>
  </Routes>
);

export default App;
