import { useEffect, useState } from "react";
import ItemCard from "./itemCard";
import axios from "axios";
import { Button } from "reactstrap";

const Bestseller = () => {
  const [selectedCategory, setSelectedCategpry] = useState("");
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState("");

  const getCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        console.log("response: ", response);
        setCategories(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  const getItems = () => {
    axios
      .get("https://fakestoreapi.com/products/category/" + selectedCategory)
      .then((response) => {
        console.log("response: ", response);
        setItems(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  const getAllItems = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("response: ", response);
        setItems(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    getItems();
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      getAllItems();
    } else {
      getItems();
    }
  }, [selectedCategory]);

  return (
    <section>
      <h1 style={{ width: "fit-content" }} className="mx-auto">
        Best seller
      </h1>

      <div className="categoryBox text-center">
        <Button
          className={selectedCategory === "" ? "active" : ""}
          color="link"
          onClick={() => {
            setSelectedCategpry("");
          }}
        >
          <h3>All</h3>
        </Button>
        {categories.length &&
          categories.map((category) => {
            return (
              <Button
                className={selectedCategory === category ? "active" : ""}
                onClick={() => {
                  setSelectedCategpry(category);
                }}
                color="link"
              >
                <h3>{category}</h3>
              </Button>
            );
          })}
      </div>
      <div className="row g-0">
        {items.length &&
          items.map((item) => {
            return (
              <div className=" col-12  col-lg-3">
                <ItemCard
                  discounted={item.price > 100 ? true : false}
                  hot={item.rating.rate > 4.5 ? true : false}
                  item={item}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Bestseller;
