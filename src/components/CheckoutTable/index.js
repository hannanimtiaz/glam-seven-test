import { Button } from "reactstrap";
import FieldWithAction from "../FieldWithAction";
import { cartContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const CheckoutTable = () => {
  const { cartState, setCartState, getCart } = useContext(cartContext);

  const [subTotal, setSubTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const getProducts = async (__products) => {
    let responseProducts = [];
    let _subTotal = 0;
    for (const product of __products) {
      await axios
        .get("https://fakestoreapi.com/products/" + product.productId)
        .then((response) => {
          responseProducts.push({
            data: response.data,
            quantity: product.quantity,
          });
          console.log("response.data.price: ", response.data.price);
          console.log("_subTotal: ", _subTotal);

          _subTotal = _subTotal + response.data.price * product.quantity;
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
    setSubTotal(_subTotal);
    setProducts(responseProducts);
  };

  const updateCart = (_product) => {
    console.log("_product.product.quantity: ", _product.product.quantity);
    console.log("_product: ", _product);
    // let _quantity = console.log("_quantity: ", _quantity);
    axios
      .patch("https://fakestoreapi.com/carts/2", {
        userId: 1,
        date: "2020-02-03",
        products: [
          {
            productId: _product.product.data.id,
            quantity:
              _product.case === "plus"
                ? ++_product.product.quantity
                : _product.case === "minus"
                ? --_product.product.quantity
                : 0,
          },
        ],
      })
      .then((response) => {
        console.log("response: ", response);
        let _cartState = structuredClone(cartState);
        cartState.data.map((item, index) => {
          if (item.productId === response.data.products[0].productId) {
            _cartState.data[index] = response.data.products[0];
          }
        });
        setCartState({ data: _cartState.data, loading: false });
        // getCart();
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  useEffect(() => {
    if (cartState.data.length) {
      getProducts(cartState.data);
    }
  }, [cartState]);

  return (
    <section className="checkout mt-5">
      <div className="row g-0 cart-table justify-content-center border-bottom pb-4">
        <div className="col-7">
          <h4>Product</h4>
        </div>
        <div className="col-1">
          <h4>Price</h4>
        </div>
        <div className="col-2">
          <h4>QTY</h4>
        </div>
        <div className="col-1">
          <h4>UNIT PRICE</h4>
        </div>
      </div>
      {products?.length &&
        products.map((product) => {
          return (
            <div className="row g-0 cart-items justify-content-center">
              <div className="col-7 d-flex">
                <Button
                  className="cart-item-delete"
                  color="link"
                  onClick={() => {
                    updateCart({ product, case: "remove" });
                  }}
                >
                  <img src="store/cart-cross.png" alt="cart remove" />
                </Button>
                <img
                  className="cart-image"
                  src={product.data.image}
                  alt="item"
                />
                <p className="my-auto ms-4">{product.data.title}</p>
              </div>
              <div className="col-1 d-flex">
                <h5 className="poppins-regular my-auto">
                  ${product.data.price}
                </h5>
              </div>
              <div className="col-2 d-flex">
                <div className="qty-control my-auto">
                  <Button
                    color="link"
                    className="me-2"
                    onClick={() => {
                      updateCart({ product, case: "minus" });
                    }}
                  >
                    <img src="store/cart_minus.png" alt="minus" />
                  </Button>
                  {product.quantity}
                  <Button
                    color="link"
                    className="ms-2"
                    onClick={() => {
                      updateCart({ product, case: "plus" });
                    }}
                  >
                    <img src="store/cart_plus.png" alt="plus" />
                  </Button>
                </div>
              </div>
              <div className="col-1 d-flex">
                <h5 className="poppins-regular my-auto">
                  ${product.data.price * product.quantity}
                </h5>
              </div>
            </div>
          );
        })}

      <div className="d-flex justify-content-between mx-5 px-5">
        <FieldWithAction
          placeholder={"Voucher Code"}
          buttonText={"Redeem"}
          buttonAction={() => {
            alert("code redeemed");
          }}
        />
        <div className="checkout-details">
          <div className="d-flex py-3">
            <p>Subtotal</p> <p className="ms-auto">${subTotal}</p>
          </div>
          <div className="d-flex py-3">
            <p>Shipping Fee</p> <p className="ms-auto">$20</p>
          </div>

          <div className="d-flex py-3 border-bottom">
            <p>Coupon</p> <p className="ms-auto">No</p>
          </div>
          <div className="d-flex py-3 ">
            <h3>Total</h3> <h3 className="ms-auto">$40</h3>
          </div>
          <Button className="w-100" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutTable;
