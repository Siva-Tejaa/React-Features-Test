import React, { useEffect } from "react";
import Navbar from "./Navbar";

//Router
import { useParams } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/features/cartSlice";
import { fetchProductDetails } from "../../redux/features/productDetailsSlice";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const { status, productDetails, error } = useSelector(
    (state) => state.productDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [productId]);

  if (status === "failed") {
    return (
      <div>
        <h1>Something Went Wrong...</h1>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <img
          src={productDetails?.thumbnail}
          style={{ width: "300px", height: "400px" }}
        />
        <h2>{productDetails?.title}</h2>
        <p>{productDetails?.description}</p>
        <span
          style={{
            padding: "4px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "6px",
            width: "60px",
          }}
        >
          🌟{productDetails?.rating}
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h3>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(
              Math.ceil(productDetails?.price * 83.57) -
                Math.ceil(
                  Math.ceil(productDetails?.price * 83.57) *
                    productDetails?.discountPercentage
                ) /
                  100
            )}
          </h3>
          <del style={{ color: "grey" }}>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(Math.ceil(productDetails?.price * 83.57))}
          </del>
          <p style={{ color: "green", margin: "0" }}>
            {productDetails?.discountPercentage} %
          </p>
        </div>
        <button
          style={{
            padding: "10px",
            border: "none",
            cursor: "pointer",
            color: "white",
            backgroundColor: "#317AE7",
            borderRadius: "6px",
          }}
          onClick={() =>
            dispatch(addProductToCart({ ...productDetails, quantity: 1 }))
          }
        >
          Add to Cart
        </button>
      </div>
      <p style={{ width: "90%", margin: "10px" }}>
        {JSON.stringify(productDetails)}
      </p>
    </div>
  );
};

export default ProductDetailsPage;
