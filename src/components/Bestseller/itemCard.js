import axios from "axios";
import { Button } from "reactstrap";

const ItemCard = (props) => {
  const addItem = (product) => {
    console.log("product: ", product);
    axios.patch("https://fakestoreapi.com/carts/2", {
      userId: 1,
      date: "2020-02-03",
      products: [{ productId: product.id, quantity: 1 }],
    });
  };

  return (
    <div className="itemBox">
      {props.hot && <div className="hot">HOT</div>}
      <div className="imageBox">
        <div className="itemActions">
          <Button color="link" className="p-0 ms-auto">
            <img src="store/action-like.png" alt="like" />
          </Button>
          <Button
            onClick={() => {
              addItem(props.item);
            }}
            color="link"
            className="p-o me-auto"
          >
            <img src="store/action-cart.png" alt="cart" />
          </Button>
        </div>

        <img
          width={"100%"}
          height={"100%"}
          src={props.item.image}
          alt={props.item.image}
        />
      </div>
      <div className="itemInfo">
        <div className="m-auto">
          <p className="poppins-bold">{props.item.title}</p>

          <div className="prices mx-auto">
            {props.discounted && (
              <h5 className="discount_price poppins-bold me-3">
                ${props.item.price}
              </h5>
            )}
            <p className={`price me-2 ${props.discounted ? "cut" : ""}`}>
              ${props.item.price}
            </p>
            {props.discounted && (
              <p className="discount poppins-bold">${props.item.price}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
