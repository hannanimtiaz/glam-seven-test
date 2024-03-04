import { NavLink } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { cartContext } from "../../App";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const { cartState } = useContext(cartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let _quantity = 0;
    for (const item of cartState.data) {
      _quantity += item.quantity;
    }
    setQuantity(_quantity);
  }, [cartState]);

  return (
    <section>
      <div className="d-flex py-2 px-5 header ms-4">
        <Input id="currenct" type="select" className="w-auto">
          <option>EN</option>
          <option>SG</option>
        </Input>
        <Input id="currenct" type="select" className="w-auto">
          <option>USD</option>
          <option>SGD</option>
        </Input>
        <div className="header-actions ms-auto">
          <Button color="link">
            <img className="mx-1" src="store/profile.png" alt="profile icon" />
            My Profile
          </Button>
          <div className="cart-button">
            <NavLink exact to={"/checkout"}>
              <Button color="link">
                <div className="itemCount">{quantity}</div>
                <img className="mx-4" src="store/cart.png" alt="cart" />
                Items
              </Button>
            </NavLink>
            <span className="ml-3">$0.00</span>
          </div>
          <Button color="link">
            <img
              className="mx-1"
              src="store/search-icon.png"
              alt="magniffying glass"
            />
          </Button>
        </div>
      </div>
      <div className="d-flex">
        <div className="ms-5 d-flex p-4">
          <img width={40} height={40} src="store/Icon.png" alt="Logo" />
          <h4 className="poppins-bold my-auto ms-2">E-comm</h4>
        </div>

        <nav className="ms-auto">
          <ul>
            <li>
              <NavLink exact to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/home">
                BAGS
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/home">
                SNEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/home">
                BELT
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/home">
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/checkout">
                CHECKOUT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
