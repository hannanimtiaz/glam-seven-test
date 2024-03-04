import { Button } from "reactstrap";

const Footer = () => {
  return (
    <section>
      <div className="footer">
        <div className="row g-0">
          <div className="col-12 col-lg-4">
            <div className="m-auto px-5 my-5">
              <div className="d-flex">
                <img width={40} height={40} src="store/Icon.png" alt="Logo" />
                <h4 className="poppins-bold my-auto ms-2">E-comm</h4>
              </div>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="m-auto px-5 my-5">
              <h4>Follow Us</h4>
              <p>
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className="socials">
                <img src="store/facebook.png" alt="facebook" />
                <img src="store/twitter.png" className="ms-5" alt="twiiter" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="m-auto px-5 my-5">
              <h4>Contact Us</h4>
              <h5 className="poppins-regular">E-Comm ,</h5>
              <h5 className="poppins-regular">4578 Marmora Road,</h5>
              <h5 className="poppins-regular">Glasgow D04 89GR</h5>
            </div>
          </div>
        </div>
        <div className="row links g-0">
          <div className="col-12 col-lg-3">
            <div>
              <h4>Information</h4>
              <ul>
                <li>
                  <Button color="link">About Us</Button>
                </li>
                <li>
                  <Button color="link">Information</Button>
                </li>
                <li>
                  <Button color="link">Privacy Policy</Button>
                </li>
                <li>
                  <Button color="link">Terms & Conditions</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div>
              <h4>Service</h4>
              <ul>
                <li>
                  <Button color="link">About Us</Button>
                </li>
                <li>
                  <Button color="link">Information</Button>
                </li>
                <li>
                  <Button color="link">Privacy Policy</Button>
                </li>
                <li>
                  <Button color="link">Terms & Conditions</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div>
              <h4>Account</h4>
              <ul>
                <li>
                  <Button color="link">About Us</Button>
                </li>
                <li>
                  <Button color="link">Information</Button>
                </li>
                <li>
                  <Button color="link">Privacy Policy</Button>
                </li>
                <li>
                  <Button color="link">Terms & Conditions</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div>
              <h4>Our Offers</h4>
              <ul>
                <li>
                  <Button color="link">About Us</Button>
                </li>
                <li>
                  <Button color="link">Information</Button>
                </li>
                <li>
                  <Button color="link">Privacy Policy</Button>
                </li>
                <li>
                  <Button color="link">Terms & Conditions</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="payments mt-5">
          <span className="copyright">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </span>
          <img src="store/brands.png" alt="payments" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
