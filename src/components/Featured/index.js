import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedItem from "./featuredItem";

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const getItems = () => {
    axios
      .get(
        "https://fakestoreapi.com/products/category/men's%20clothing?limit=3"
      )
      .then((response) => {
        console.log("response: ", response);
        setFeaturedProducts(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <section>
      <h1 style={{ width: "fit-content" }} className="mx-auto mb-5">
        Featured Products
      </h1>
      <div className="featured-products">
        {featuredProducts.map((product) => {
          return (
            <FeaturedItem
              discounted={product.price > 100 ? true : false}
              product={product}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Featured;
