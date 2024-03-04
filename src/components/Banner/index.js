import { Button } from "reactstrap";

const Banner = () => {
  return (
    <section className="w-100">
      <div className="banner">
        <div className="row h-100 g-0">
          <div className="col-12 col-lg-6 h-100 d-flex">
            <div className="banner-text m-auto ">
              <h1 className="heading">Adidas Men Running Sneakers</h1>
              <h2>Performance and design. Taken right to the edge.</h2>
              <Button color="link">Shop Now</Button>
            </div>
          </div>
          <div className="col-12 col-lg-6 h-100 d-flex">
            <div className="banner-shoe">
              <img
                className="w-100"
                src="store/shoe.png"
                alt="offer banner"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
