import React from "react";
import Navbar from "./Navbar";

import { useSelector, useDispatch } from "react-redux";

import {
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  clearCart,
} from "../../redux/features/cartSlice";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalAmount = cart.reduce((totalAmount, item) => {
    return totalAmount + Math.ceil(item.price * 83.57) * item.quantity;
  }, 0);

  // const discountPercentage = cart.reduce((totalDiscount, item) => {
  //   return totalDiscount + item.discountPercentage * item.quantity;
  // }, 0);

  // {
  //   console.log(discountPercentage);
  // }

  return (
    <div>
      <Navbar />

      <h1>Cart Page</h1>
      {cart.length !== 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              backgroundColor: "#E8E8ED",
              padding: "30px",
              borderRadius: "10px",
              width: "65%",
            }}
          >
            <button
              style={{
                margin: "20px",
                backgroundColor: "red",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            {cart.map((cartProduct) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderBottom: "1px solid white",
                  }}
                  key={cartProduct?.id}
                >
                  <div style={{ width: "200px" }}>
                    <img
                      src={cartProduct?.images[0]}
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                    key={cartProduct?.id}
                  >
                    <h4>{cartProduct?.title}</h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <button
                        style={{ padding: "5px" }}
                        onClick={() =>
                          dispatch(decreaseProductQuantity(cartProduct))
                        }
                      >
                        -
                      </button>
                      <h4>{cartProduct?.quantity}</h4>
                      <button
                        style={{ padding: "5px" }}
                        onClick={() => dispatch(addProductToCart(cartProduct))}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <h3>
                          {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(
                            Math.ceil(cartProduct?.price * 83.57) *
                              cartProduct?.quantity -
                              Math.ceil(
                                Math.ceil(cartProduct?.price * 83.57) *
                                  cartProduct?.quantity *
                                  cartProduct?.discountPercentage
                              ) /
                                100
                          )}
                        </h3>
                        <del style={{ color: "grey" }}>
                          {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(
                            Math.ceil(cartProduct?.price * 83.57) *
                              cartProduct?.quantity
                          )}
                        </del>
                        <p style={{ color: "green", margin: "0" }}>
                          {cartProduct?.discountPercentage} %
                        </p>
                      </div>

                      <button
                        style={{ padding: "5px", cursor: "pointer" }}
                        onClick={() =>
                          dispatch(deleteProductFromCart(cartProduct))
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              backgroundColor: "#E8E8ED",
              padding: "20px",
              borderRadius: "10px",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <h4>Order Summary</h4>
            <hr />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <b>Total</b>
              <b>₹ {totalAmount}</b>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <b>Discount</b>
              <b>0</b>
              {/* <b>₹ {Math.ceil(totalAmount * (discountPercentage / 100))}</b> */}
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <b>Shipping</b>
              <b>Free</b>
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <b>Order Total</b>
              <b>₹ {totalAmount}</b>
            </div>
            <button
              style={{
                padding: "8px",
                border: "none",
                backgroundColor: "yellow",
                cursor: "pointer",
              }}
              onClick={() => dispatch(clearCart())}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <img src="https://www.adasglobal.com/img/empty-cart.png" />
      )}
    </div>
  );
};

export default CartPage;
