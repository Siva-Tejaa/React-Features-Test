import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        backgroundColor: "#0A0A23",
      }}
    >
      <Link to="/allproducts">
        <h2 style={{ color: "white" }}>E Commerce Store</h2>
      </Link>
      <Link to="/cart" style={{ position: "relative", padding: "8px" }}>
        🛒
        <p
          style={{
            color: "white",
            position: "absolute",
            top: "0px",
            right: "0px",
            backgroundColor: "red",
            padding: "2px 4px 2px 4px",
            borderRadius: "100%",
          }}
        >
          {cart.length}
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
