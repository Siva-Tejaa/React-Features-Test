import React, { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/productsSlice";
import { addProductToCart } from "../../redux/features/cartSlice";
import { addRemoveProductToWishlist } from "../../redux/features/wishListSlice";

//Router
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { status, products, error } = useSelector((state) => state.allProducts);

  const { wishList } = useSelector((state) => state.wishList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === "loading") {
    return (
      <div>
        <h1>Fetching Data...</h1>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div>
        <h1>Something Went Wrong...</h1>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "30px",
        margin: "10px",
      }}
    >
      {products.map((product) => (
        <div
          key={product?.id}
          style={{
            backgroundColor: "#E8E8ED",
            padding: "10px",
            borderRadius: "10px",
            width: "250px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textDecoration: "none", // Remove underline from link
            color: "inherit",
            position: "relative",
          }}
        >
          <p
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              cursor: "pointer",
            }}
            onClick={() => dispatch(addRemoveProductToWishlist(product))}
          >
            {wishList.find((item) => item.id === product.id) ? "❤️" : "🤍"}
          </p>
          <Link to={`/product/${product.id}`}>
            <img
              src={
                product?.images[0] ??
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
              }
              style={{ width: "100%", height: "250px", borderRadius: "10px" }}
            />
          </Link>
          <h4>{product?.title}</h4>
          <span
            style={{
              padding: "4px",
              backgroundColor: "green",
              color: "white",
              borderRadius: "6px",
              width: "60px",
            }}
          >
            🌟{product?.rating}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h3>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(
                Math.ceil(product?.price * 83.57) -
                  Math.ceil(
                    Math.ceil(product?.price * 83.57) *
                      product?.discountPercentage
                  ) /
                    100
              )}
            </h3>
            <del style={{ color: "grey" }}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(Math.ceil(product?.price * 83.57))}
            </del>
            <p style={{ color: "green", margin: "0" }}>
              {product?.discountPercentage} %
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
              dispatch(addProductToCart({ ...product, quantity: 1 }))
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
